import "../styles/globals.css";
import type { AppProps } from "next/app";
import Headinfo from "../components/head/Headinfo";
import Header from "../components/header/Header";
import Sidebar from "../components/main/sidebar/Sidebar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Headinfo는 <head> 태그 */}
      <Headinfo />
      {/* Header는 <header> 태그 */}
      <Header />
      <main>
        <Sidebar />
        {/* pages안에 있는 파일이 <Component {...pageProps}/>에 들어감 */}
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
