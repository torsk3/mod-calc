# 合同式電卓

## 環境構築まで

- [NodeJSをWINDOWSにインストール](https://learn.microsoft.com/ja-jp/windows/dev-environment/javascript/nodejs-on-windows)
- [WINDOWSでのReactインストール](https://learn.microsoft.com/ja-jp/windows/dev-environment/javascript/react-on-windows)
- サンプルプロジェクトの作成
  - [React + TypeScript](https://qiita.com/shikichee/items/e547fa2a22d2f6991dac)
  - `npx create-react-app プロダクト名 --template typescript`
- Firebase登録
  - プロジェクト作成
  - webアプリの登録まで
- [Firebase CLIでデプロイ](https://zenn.dev/hisasy/articles/ec057b18566215)
  - `npm install firebase`
  - [powershellのスクリプト実行の許可](https://qiita.com/Targityen/items/3d2e0b5b0b7b04963750)
    - `PowerShell Set-ExecutionPolicy RemoteSigned`

### Firebase init時に選んだ選択肢

? Are you ready to proceed? Yes
? Which Firebase features do you want to set up for this directory? Press Space to select features, then Enter to confirm your choices. Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys

? Please select an option: Use an existing project
? Select a default Firebase project for this directory: blockchain-study-61909 (blockchain-study)

? What do you want to use as your public directory? build
? Configure as a single-page app (rewrite all urls to /index.html)? No
? Set up automatic builds and deploys with GitHub? No