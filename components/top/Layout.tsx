import { ReactNode, VFC } from "react";
import Head from "next/head";
import Header from "../common/Header";
import Footer from "../common/Footer";

interface Props {
  children: ReactNode;
  title?: string;
}
const Layout: VFC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={`flex bg-gray-100 flex-col h-screen`}>
        <Header />
        <div className="flex-1 px-4 md:px-18 xl:px-36 bg-gray-100 blogContent">
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
