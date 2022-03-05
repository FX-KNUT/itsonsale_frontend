import React, { Fragment } from "react";
import Badges from "./Badges";
import SearchForm from "./SearchForm";
import styles from "../../../styles/main/sidebar/_sidebar.module.scss";

const SIDEBAR_CONTENTS = [
  <Badges key="brandBadges" />,
  <SearchForm key="searchform" />,
];

const Sidebar = () => {
  return (
    <aside className={styles.sidebarWrapper}>
      {SIDEBAR_CONTENTS.map((content, idx) => (
        <Fragment key={idx}>{content}</Fragment>
      ))}
    </aside>
  );
};

export default Sidebar;
