import React, { useState, useEffect, useRef } from "react";
import styles from "../../../styles/reusable/_carousel.module.scss";

//타입 기록 뭘로 해야될 지 모르겠당
const Carousel = ({ data }: Array) => {
  const [count, setCount] = useState(0);
  const loopRef = useRef(null);
  const length = data.length;
  

  
  useEffect(() => {
    const timer = setInterval(() => {
      setCount((count) => count + 1);
    }, 2000);
    return () => clearInterval(timer);
  }, [count]);

  const prevSlide = () => {
    setCount(count <= length - 1 ? length-1 : count - 1);
    console.log("click count", count);
  };
  const nextSlide = () => {
    setCount(count >= length - 1 ? 0 : count + 1);
    console.log("click count", count);
  };
  return (
    <section className={styles.slider}>
      <p className={styles.ArrowLeft} onClick={prevSlide}>
        <i className="fa-solid fa-chevron-left"></i>
      </p>

      {data.map((file, idx) => {
        return (
          <div className={idx === count ? "slide active" : "slide"} key={idx}>
            {idx === count && (
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
