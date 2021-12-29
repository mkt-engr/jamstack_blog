import { ReactNode, VFC, useEffect } from "react";
import Head from "next/head";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Sidebar from "../common/Sidebar";
import styles from "./Layout.module.scss";
interface Props {
  children: ReactNode;
  title?: string;
  isDisplaySidebar?: boolean;
}
const Layout: VFC<Props> = ({ children, title, isDisplaySidebar }) => {
  // resizeイベントの取得

  //TODO:hooksにしたい。（Pure JS：https://coliss.com/articles/build-websites/operation/css/viewport-units-on-mobile.html）
  //Hooks:https://usehooks.com/useWindowSize/
  useEffect(() => {
    const contentWrapper = document.getElementById("js-contentWrapper");
    const vh = window.innerHeight * 0.01;
    contentWrapper!.style.setProperty("--vh", `${vh}px`);
    window.addEventListener("resize", () => {
      const vh = window.innerHeight * 0.01;
      contentWrapper!.style.setProperty("--vh", `${vh}px`);
    });
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div
        className={`flex bg-gray-100 flex-col ${styles.contentWrapper}`}
        id="js-contentWrapper"
      >
        <Header />
        <div className="_flex flex-1 px-4 md:px-18 xl:px-36 bg-gray-100 blogContent">
          <main className="_flex-1">{children}</main>
          {isDisplaySidebar && <Sidebar />}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
