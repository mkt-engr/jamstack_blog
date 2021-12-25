import NextDocument, { Html, Head, Main, NextScript } from "next/document";
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
        </Head>
        {/* <body className="bg-gray-200"> */}
        <body className="min-h-screen leading-relaxed box-content">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
