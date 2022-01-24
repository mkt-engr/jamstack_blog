import { ReactNode, VFC, useEffect } from "react";
import Head from "next/head";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Sidebar from "../common/Sidebar";
import styles from "./Layout.module.scss";
import { useSetFooterPosition } from "../../hooks/useSetFooterPosition";
interface Props {
  children: ReactNode;
  title?: string;
  isDisplaySidebar?: boolean;
}
const Layout: VFC<Props> = ({ children, title, isDisplaySidebar = false }) => {
  useSetFooterPosition();

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
