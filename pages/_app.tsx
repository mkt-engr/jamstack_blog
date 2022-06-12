// import { useEffect } from "react";
// import { useRouter } from "next/router";
import { AppProps } from "next/app";
import "../styles/globals.scss";
import { useGAPageView } from "../hooks/useGAPageView";
import GA from "../components/GA";

const MyApp = ({ Component, pageProps }: AppProps) => {
  useGAPageView();

  return (
    <>
      <GA /> {/*Google Analytics*/}
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
