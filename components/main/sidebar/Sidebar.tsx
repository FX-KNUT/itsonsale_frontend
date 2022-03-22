import React, { Fragment } from "react";
import styles from "../../../styles/main/sidebar/_sidebar.module.scss";
import { SIDEBAR_CONTENTS } from "../../constant";

const Sidebar = () => {
  return (
    <aside className={styles.sidebarWrapper}>
      {SIDEBAR_CONTENTS.map((content, idx) => (
        <Fragment key={idx}>{content()}</Fragment>
      ))}
    </aside>
  );
};

export default Sidebar;
