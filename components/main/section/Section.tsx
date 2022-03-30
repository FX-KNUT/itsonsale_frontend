import React from "react";
import styles from "../../../styles/main/section/_section.module.scss";
import { CarouselData } from "../../constant";
import Carousel from "./Carousel";

const Section = () => {
  return (
    <section className={styles.sectionWrapper}>
      <Carousel data={CarouselData}/>
    </section>
  );
};

export default Section;
