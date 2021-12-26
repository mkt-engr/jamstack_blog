import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import Favicon from "../components/Favicons";
import GoogleAnalytics from "../components/GoogleAnalytics";
import { GA_ID, existsGaId } from "../lib/gtag";

type Props = {};

class Document extends NextDocument<Props> {
  render() {
    return (
      <Html lang="ja">
        <Head>
          {/* Google Analytics */}
          <GoogleAnalytics />
          <Favicon />
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
