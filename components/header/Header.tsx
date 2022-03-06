import React from "react";
import { LOGO } from "../word";
import styles from "../../styles/header/_header.module.scss";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.logoWrapper}>
        {/* NextJS는 경로간의 이동을 위해 Link 컴포넌트를 제공합니다. react-router-dom 안써도 됩니다. */}
        <Link href="/">
          <a>
            <h3>{LOGO}</h3>
          </a>
        </Link>
      </div>
      {/* 여러분들이 더 있었으면 하는 nav를 추가해주세요! */}
    </header>
  );
};

export default Header;
