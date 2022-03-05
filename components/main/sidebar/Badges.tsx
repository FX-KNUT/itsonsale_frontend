import React from "react";
import BrandBadge from "../../reusable/BrandBadge";
import styles from "../../../styles/main/sidebar/_badges.module.scss";
import { BADGE_BRANDS } from "../../word";

const Badges = () => {
  return (
    <div className={styles.badgesWrapper}>
      {BADGE_BRANDS.map((brand, idx) => (
        <BrandBadge key={idx} brand={brand}></BrandBadge>
      ))}
    </div>
  );
};

export default Badges;
