# JamStack ブログを作ろう

構想から約２年。いよいよ２０２１年中に JamStack なブログを作成することを決めた。

## やりたいこと

とりあえず思いつくままあげる。
後で分類する。
思いつくままにあげる

- メインページ(ブログ一覧)
  - アーカイブ（月ごとに記事を取得）
- コンテントページ(ブログの記事の詳細)
  - カテゴリー
  - タグ
  - 目次
  - Qiita とか Zenn みたいに記事に追随する目次
  - コードのハイライト
    - 行数とか出せればええんやけどできた試しがない
  - コメント欄
  - 登録日、更新日は載せたい
- ブログ記事の検索
  - 検索ボックス
  - タグ、カテゴリー
  - おすすめ記事
- 自分について（Zenn とか Qiita へのリンクとか）
- 404 ページ
  - 検索
  - おすすめ記事をつける
- お問合せ
  - いる？
  - https://blog.microcms.io/nuxt-contact-zapier/
- ページング
- レスポンシブ
- テスト
  - Jest,React-Testing-Library
- 独自ドメイン
- デザイン
  - Figma 使う？
- Tailwind
  - ダークモード切り替え
- Google Analytics
- ダークモード切り替え
- PWA
- StoryBook
- SWR
- microCMS と Vercel の連携

## URL 設計

| URL      | 内容                |     |
| -------- | ------------------- | --- |
| /        | 記事一覧            |     |
| /[id]    | 記事詳細            |     |
| /search  | 検索                |     |
| /about   | 自己紹介&SNS リンク |     |
| /404     | 記事ないぜ          |     |
| /contact | いらん？            |     |

## 機能

ヘッダーは全ページ共通で

- ヘッダー
  - ロゴ
  - 検索マーク
  - about
  - ダークモード切り替え（多分無理）

### `/`ページ

- メインコンテンツ
  - 記事一覧
    - 作成日
    - 更新日
    - タイトル
    - 概要
    - 文章抜粋(いらん？)
  - ページング
- サイドバー(そもそもいる？)
  - カテゴリ
  - プロフィール（胡散臭いブログになりそう）

### `/[id]`ページ

- ヘッダ（メインページと同じ）
- メインコンテンツ
  - 記事詳細
    - 作成日
    - 更新日
    - タイトル
    - 目次(サイドバーに出すからいらなさそう？)
    - 中身
  - コメント欄 or 問い合わせ(Twitter でよくね？)
  - 別のおすすめ記事
  - 次の記事、前の記事
- サイドバー
  - 追従する目次(アンカーリンク)
  - Topics(TypeScript Tailwind Figma とか)

### `/search`ページ

- 検索ボックス
- おすすめ記事
- Topic 一覧

### `/about`ページ

- 自己紹介
- SNS リンク

## デザイン

PC
タブレット
スマホ
の３種類想定

# 年が明けて改めてやること

- [x] ISR にする
- [ ] クライアントフェッチもやる
- Zenn で記事にする
- 目次
- 検索機能

# React バージョンアップ

17 から 18 にする
https://nextjs.org/docs/upgrading

```
npm install react@latest react-dom@latest
```

なんかエラー出た

```
./node_modules/@next/react-dev-overlay/lib/client.js
Module build failed: Error: ENOENT: no such file or directory, open '/Users/makitomori/Documents/dev/jamstack_blog/node_modules/@next/react-dev-overlay/lib/client.js'
```

上のやつは`npm run dev`で出なくなった。代わりに gtag のエラーが出た

Google Analytics のコンポーネントを\_document.tsx から\_app.tsx に移したことで上記のエラーは解決。
https://bytemeta.vip/index.php/repo/KushibikiMashu/my-tech-blog/issues/4

次はまた違うエラーが出た。

```
react-dom.development.js?ac89:86 Warning: You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".
```
