import { useEffect } from "react";
export const useSetFooterPosition = () => {
  // resizeイベントの取得
  //TODO:hooksにしたい。（Pure JS：https://coliss.com/articles/build-websites/operation/css/viewport-units-on-mobile.html）
  //Hooks:https://usehooks.com/useWindowSize/
  useEffect(() => {
    const contentWrapper = document.getElementById("js-contentWrapper");
    const vh = window.innerHeight * 0.01;
    contentWrapper!.style.setProperty("--vh", `${vh}px`);
    const handleFooterPosition = () => {
      const vh = window.innerHeight * 0.01;
      contentWrapper!.style.setProperty("--vh", `${vh}px`);
    };
    window.addEventListener("resize", handleFooterPosition);
    return () => {
      window.removeEventListener("resize", handleFooterPosition);
    };
  }, []);
};
