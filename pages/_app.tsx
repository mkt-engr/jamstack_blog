import { useEffect } from "react";
import { useRouter } from "next/router";
import { AppProps } from "next/app";
import "../styles/globals.scss";
import { useGAPageView } from "../hooks/useGAPageView";

const MyApp = ({ Component, pageProps }: AppProps) => {
  useGAPageView();
  return <Component {...pageProps} />;
};

export default MyApp;
