import { ReactNode, VFC } from "react";
import Head from "next/head";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Sidebar from "../common/Sidebar";
interface Props {
  children: ReactNode;
  title?: string;
}
const Layout: VFC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>MKT Memo</title>
      </Head>
      <div className="flex bg-gray-100 flex-col min-h-full">
        <Header></Header>
        <div className="flex px-4 md:px-18 xl:px-36 bg-gray-100">
          <main className="flex-1">{children}</main>
          {false && <Sidebar></Sidebar>}
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Layout;
