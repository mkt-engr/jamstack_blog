import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import Favicon from "../components/Favicons";
import GoogleAnalytics from "../components/GoogleAnalytics";
import { GA_TRACKING_ID } from "../lib/gtag";

type Props = {};

class Document extends NextDocument<Props> {
  render() {
    return (
      <Html lang="ja">
        <Head>
          {/* Google Analytics */}
          {GA_TRACKING_ID && (
            <>
              <script
                async={true}
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });`,
                }}
              />
            </>
          )}
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
