import Image from "next/image";
import React from "react";
import styles from "../../styles/reusable/_product.module.scss";
import { WON } from "../word";

// Props는 Product에 들어갈 props에 대한 자료형을 나타냅니다.
interface Props {
  brand: string;
  event: string;
  img: string;
  name: string;
  price: number;
}

const Product = ({ brand, event, img, name, price }: Props) => {
  // cn(className)
  // cn으로 css를 조절합니다
  const event_cn = event === "1+1" ? "event_opo" : "event_tpo";
  let brand_cn: string = "";
  switch (brand) {
    case "CU":
      brand_cn = "cu";
      break;
    case "GS25":
      brand_cn = "gs";
      break;
    case "7Eleven":
      brand_cn = "seven";
      break;
    case "MINISTOP":
      brand_cn = "mini";
      break;
    case "Emart":
      brand_cn = "emart";
      break;
  }

  return (
    <div className={styles.productWrapper}>
      <div className={styles.productHeader}>
        <span className={`${styles.brand} ${styles[brand_cn]}`}>{brand}</span>
        <span className={`${styles.event} ${styles[event_cn]}`}>{event}</span>
      </div>
      <div className={styles.productContent}>
        <Image alt={name} width={200} height={200} src={img}></Image>
        <div className={styles.introduceWrapper}>
          <span className={styles.name}>{name}</span>
          <span className={styles.price}>
            {price}
            {WON}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Product;
