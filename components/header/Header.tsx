import React, { Fragment, useEffect, useState } from "react";
import { LOGO } from "../constant";
import styles from "../../styles/header/_header.module.scss";
import Link from "next/link";
import Dim from "../reusable/Dim";
import Slide from "../reusable/Slide";
import { SIDEBAR_CONTENTS } from "../constant";
import Badges from "../main/sidebar/Badges";
import SearchForm from "../main/sidebar/SearchForm";

const Header = () => {
  // toggle dim
  const [isShow, setIsShow] = useState<boolean>(false);

  const onClickBar = () => {
    setIsShow((prev) => !prev);
  };

  useEffect(() => {
    console.log(isShow);
  }, [isShow]);

  return (
    <>
      <header className={styles.headerWrapper}>
        <div className={styles.logoWrapper}>
          {/* NextJS는 경로간의 이동을 위해 Link 컴포넌트를 제공합니다. react-router-dom 안써도 됩니다. */}
          <Link href="/">
            <a>
              <h3>{LOGO}</h3>
            </a>
          </Link>
        </div>
        <div className={styles.barWrapper} onClick={onClickBar}>
          <i className="fa-solid fa-bars"></i>
        </div>
        {/* 여러분들이 더 있었으면 하는 nav를 추가해주세요! */}
      </header>
      {isShow && (
        <Dim setIsShow={setIsShow}>
          <Slide setIsShow={setIsShow}>
            <Fragment>
              {/* 에러나는데 나중에 살펴볼 예정 */}
              {/* {SIDEBAR_CONTENTS.map((content, idx) => (
                <Fragment key={idx}>{content()}</Fragment>
              ))} */}
              <Badges></Badges>
              <SearchForm></SearchForm>
            </Fragment>
          </Slide>
        </Dim>
      )}
    </>
  );
};

export default Header;
