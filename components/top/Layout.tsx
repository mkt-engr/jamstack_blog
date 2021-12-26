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
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={`${styles.contentsWrapper} min-h-screen`}>
        <div className={styles.headerWrapper}>
          <Header />
        </div>
        <div className={`${styles.mainWrapper} bg-gray-100`}>
          <div className="flex px-4 md:px-18 xl:px-36 ">
            <main className="flex-1">{children}</main>
            {isDisplaySidebar && <Sidebar />}
          </div>
        </div>
        <div className={styles.footerWrapper}>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
