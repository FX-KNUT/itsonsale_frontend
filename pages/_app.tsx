import "../styles/globals.css";
import type { AppProps } from "next/app";
import Headinfo from "../components/head/Headinfo";
import Header from "../components/header/Header";
import Sidebar from "../components/main/sidebar/Sidebar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Headinfo />
      <Header />
      <main>
        <Sidebar />
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
