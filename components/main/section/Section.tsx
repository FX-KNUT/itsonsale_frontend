import React from "react";
import styles from "../../../styles/main/section/_section.module.scss";
import Product from "../../reusable/Product";

const Section = () => {
  return (
    <section className={styles.sectionWrapper}>
      <Product
        brand="CU"
        event="1+1"
        img="http://bgf-cu.xcache.kinxcdn.com/product/5000159440349.jpg"
        name="스니커즈"
        price={123123}
      />
    </section>
  );
};

export default Section;
