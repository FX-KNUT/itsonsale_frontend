import Image from "next/image";
import React, { Fragment } from "react";
import styles from "../../styles/reusable/_product.module.scss";
import { WON } from "../constant";
import Modal from "./modal";

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
    <Fragment>
      <div className={`${styles.productContainer} ${styles[brand_cn]}`}>
        <div className={styles.absoluteEvent}>
          <span className={styles.event}>{event}</span>
        </div>
        <div className={styles.productWrapper}>
          <div className={styles.productContent}>
            <div className={styles.imgWrapper}>
              <Image
                alt={name}
                src={img}
                layout="intrinsic"
                width={200}
                height={190}
              ></Image>
            </div>
            <div className={styles.productInfo}>
              <span className={styles.name}>{name}</span>
              <span className={styles.price}>
                {price}
                {WON}
              </span>
            </div>
          </div>
        </div>
      </div>
      <Modal
        brand={brand}
        event={event}
        img={img}
        name={name}
        price={price}
      ></Modal>
    </Fragment>
  );
};

export default Product;
