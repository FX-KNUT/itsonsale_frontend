import React, { useState, useEffect, useRef } from "react";
import styles from "../../../styles/reusable/_carousel.module.scss";

const Carousel = ({ data }: Array) => {
  const [current, setCurrent] = useState(0);
  const length = data.length;

  useEffect(() => {
    const timer = setInterval(() => {
      if (current >= length - 1) {
        setCurrent((count) => 0);
      } else {
        setCurrent((count) => count + 1);
      }
    }, 3000);
    return () => clearInterval(timer);
  }, [current]);

  const prevSlide = () => {
    setCurrent(current <= 0 ? length - 1 : current - 1);
  };
  const nextSlide = () => {
    setCurrent(current >= length - 1 ? 0 : current + 1);
  };
  return (
    <section className={styles.slider}>
      <p className={styles.ArrowLeft} onClick={prevSlide}>
        <i className="fa-solid fa-chevron-left"></i>
      </p>

      {data.map((file: Array, idx: number) => {
        return (
          <div className={idx === current ? "slide active" : "slide"} key={idx}>
            {idx === current && (
              <img
                src={file.image}
                key={file.key}
                className={styles.image}
                alt="market"
              />
            )}
          </div>
        );
      })}
      <p className={styles.ArrowRight} onClick={nextSlide}>
        <i className="fa-solid fa-chevron-right"></i>
      </p>
    </section>
  );
};

export default Carousel;
