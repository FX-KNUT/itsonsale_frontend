import Link from "next/link";
import React from "react";
import styles from "../../styles/reusable/_badge.module.scss";

interface Props {
  brand: string;
  cn: string;
}

const Badge = ({ brand, cn }: Props) => {
  return (
    <div className={`${styles.brandbadge} ${styles[cn]}`}>
      <Link href={`/brands/${cn}`}>
        <a>
          <span>{brand}</span>
        </a>
      </Link>
    </div>
  );
};

export default Badge;
