import type { NextPage } from "next";
import { Fragment } from "react";
import Section from "../components/main/section/Section";
import Sidebar from "../components/main/sidebar/Sidebar";
import styles from "../styles/Home.module.scss";

const MAIN_CONTENTS = [<Sidebar key="sidebar" />, <Section key="section" />];

const Home: NextPage = () => {
  // console.log(MAIN_CONTENTS);
  return (
    <main className={styles.main}>
      {MAIN_CONTENTS.map((content, idx) => (
        <Fragment key={idx}>{content}</Fragment>
      ))}
    </main>
  );
};

export default Home;
