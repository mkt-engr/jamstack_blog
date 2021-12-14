import { VFC, ReactNode } from "react";
import Head from "next/head";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Sidebar from "../common/Sidebar";

interface Props {
  children: ReactNode;
  title: string;
}
const ArticleLayout: VFC<Props> = ({ children, title = "title" }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <div className="flex px-4 md:px-18 xl:px-36 bg-gray-100 blogContent">
        <main className="flex-1">{children}</main>
        {false && <Sidebar></Sidebar>}
      </div>
      <Footer></Footer>
    </>
  );
};

export default ArticleLayout;
