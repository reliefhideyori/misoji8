# 令和８年 多治見市三十路式 HP

多治見市三十路式の公式ウェブサイトです。

## 技術スタック

- React 18
- Vite
- Tailwind CSS
- Lucide React (アイコン)

## 開発環境のセットアップ

### 1. 依存関係のインストール
```bash
npm install
```

### 2. 環境変数の設定
`.env.example`をコピーして`.env`ファイルを作成し、Gemini APIキーを設定してください。

```bash
# .envファイルを作成
cp .env.example .env
```

`.env`ファイルを編集:
```
VITE_GEMINI_API_KEY=your_actual_api_key_here
```

**APIキーの取得方法:**
1. [Google AI Studio](https://aistudio.google.com/app/apikey)にアクセス
2. 「Create API Key」をクリック
3. 生成されたキーを`.env`ファイルに貼り付け

### 3. 開発サーバーの起動
```bash
# 開発サーバーの起動
npm run dev

# プロダクションビルド
npm run build

# ビルド結果のプレビュー
npm run preview
```

## Vercelでのデプロイ

このプロジェクトはVercelでホスティングされています。

### Vercelでの環境変数設定
1. Vercelダッシュボードでプロジェクトを開く
2. 「Settings」→「Environment Variables」に移動
3. 以下の環境変数を追加:
   - **Name**: `VITE_GEMINI_API_KEY`
   - **Value**: あなたのGemini APIキー
   - **Environment**: Production, Preview, Development (すべて選択)
4. 「Save」をクリック
5. 「Deployments」タブから最新のデプロイを選択し、「Redeploy」をクリック

## ライセンス

Private
