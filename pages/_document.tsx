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
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicons/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicons/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/favicons/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <meta name="msapplication-TileColor" content="##3B1EEc" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <body className="min-h-screen leading-relaxed box-content">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
