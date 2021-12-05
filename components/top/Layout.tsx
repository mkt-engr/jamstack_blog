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
      <Head>{title}</Head>
      <Header></Header>
      <div className="flex">
        <main>{children}</main>
        <Sidebar></Sidebar>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Layout;
