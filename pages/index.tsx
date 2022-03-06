import type { NextPage } from "next";
import { Fragment } from "react";
import styles from "../styles/Home.module.scss";
import { MAIN_CONTENTS } from "../components/word";

const Home: NextPage = () => {
  return (
    <main className={styles.main}>
      {MAIN_CONTENTS.map((content, idx) => (
        <Fragment key={idx}>{content()}</Fragment>
      ))}
    </main>
  );
};

export default Home;
