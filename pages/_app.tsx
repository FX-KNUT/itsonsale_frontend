import "../styles/globals.css";
import type { AppProps } from "next/app";
import Headinfo from "../components/head/Headinfo";
import Header from "../components/header/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Headinfo />
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
