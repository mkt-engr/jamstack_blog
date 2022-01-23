import { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";
export const useGAPageView = () => {
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
};
