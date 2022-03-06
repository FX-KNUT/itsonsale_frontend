import Link from "next/link";
import React from "react";
import styles from "../../styles/reusable/_badge.module.scss";

interface Props {
  brand: string;
  cn: string;
}

const Badge = ({ brand, cn }: Props) => {
  return (
    <Link href={`/brands/${cn}`}>
      <a>
        <div className={`${styles.brandbadge} ${styles[cn]}`}>
          <span>{brand}</span>
        </div>
      </a>
    </Link>
  );
};

export default Badge;
