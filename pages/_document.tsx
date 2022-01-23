import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import Favicon from "../components/Favicons";
import GA from "../components/GA";

type Props = {};
class Document extends NextDocument<Props> {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <GA /> {/*Google Analytics*/}
          <Favicon /> {/*ファビコン関連のコンポーネント*/}
        </Head>
        <body className="leading-relaxed box-content">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
