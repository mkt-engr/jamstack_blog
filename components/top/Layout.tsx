import { ReactNode, VFC } from "react";
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
  window.addEventListener("resize", () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  });

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={`flex bg-gray-100 flex-col ${styles.contentWrapper}`}>
        <Header />
        <div className="flex flex-1 px-4 md:px-18 xl:px-36 bg-gray-100">
          <main className="flex-1">{children}</main>
          {isDisplaySidebar && <Sidebar />}
        </div>
        <div className={styles.footerWrapper}>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
