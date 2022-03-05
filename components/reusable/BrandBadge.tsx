import React from "react";
import styles from "../../styles/reusable/_brandbadge.module.scss";

interface Props {
  brand: string;
}

const BrandBadge = ({ brand }: Props) => {
  return <div className={styles.brandbadge}>{brand}</div>;
};

export default BrandBadge;
