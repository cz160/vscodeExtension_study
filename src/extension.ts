import * as vscode from "vscode";

// 插件激活时执行
export function activate(context: vscode.ExtensionContext) {
  console.log("我被激活了");
  let disposable = vscode.commands.registerCommand("app.helloWorld", () => {
    const message = "你好欢迎使用我的插件";
    vscode.window.showInformationMessage(message);
    vscode.window.showWarningMessage(message);
  });
  context.subscriptions.push(disposable);
}

// 当插件销毁时执行
export function deactivate() {}
