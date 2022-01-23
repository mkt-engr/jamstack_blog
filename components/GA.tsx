import { VFC } from "react";
import { GA_TRACKING_ID } from "../lib/gtag";
import Script from "next/script";
const GA: VFC = () => {
  return (
    <>
      {GA_TRACKING_ID && (
        <>
          <Script
            id="ga_tag_manager"
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <Script
            id="ga_tag_function"
            strategy="afterInteractive"
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
    </>
  );
};

export default GA;
