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
    <div>
      <Head>{title}</Head>
      <Header></Header>
      <main>{children}</main>
      <Sidebar></Sidebar>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
