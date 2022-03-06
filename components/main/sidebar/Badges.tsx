import React from "react";
import Badge from "../../reusable/Badge";
import styles from "../../../styles/main/sidebar/_badges.module.scss";
import { BADGE_BRANDS } from "../../word";

const Badges = () => {
  return (
    <div className={styles.badgesWrapper}>
      {BADGE_BRANDS.map((badge) => {
        const { brand, key } = badge;
        return <Badge key={key} brand={brand} cn={key}></Badge>;
      })}
    </div>
  );
};

export default Badges;
