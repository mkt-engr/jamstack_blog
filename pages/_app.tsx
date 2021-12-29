import { useEffect } from "react";
import { useRouter } from "next/router";
import { AppProps } from "next/app";
import * as gtag from "../lib/gtag";
import "../styles/globals.scss";

const MyApp = ({ Component, pageProps }: AppProps) => {
  // Google Analyticsをページ遷移時にも対応させる
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return <Component {...pageProps} />;
};

export default MyApp;
