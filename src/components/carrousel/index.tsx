import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./styles.module.scss";

interface Props {
  slides: any;
}

function Carousel({ slides }: Props) {
  const [current, setCurrent] = useState(0);
  const slideLength = slides.length;

  const nextSlide = () => {
    setCurrent((prevState) =>
      prevState === slideLength - 1 ? 0 : current + 1
    );
  };

  const prevSlide = () => {
    setCurrent((prevState) =>
      prevState === 0 ? slideLength - 1 : current - 1
    );
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  const changeToSlide = (index: number) => {
    setCurrent(index);
  };

  return (
    <>
      <section className={styles.slider}>
        {slideLength >= 2 && (
          <FontAwesomeIcon
            icon={faChevronLeft}
            className={styles.arrow}
            onClick={prevSlide}
          />
        )}
        {slides.map((slide, index) => (
          <div
            className={index === current ? styles.slideActive : styles.slide}
            key={slide}
          >
            {index === current && (
              <img
                src={slide.image}
                className={styles.image}
                alt="product-imag"
              />
            )}
          </div>
        ))}
        {slideLength >= 2 && (
          <FontAwesomeIcon
            icon={faChevronRight}
            className={styles.arrow}
            onClick={nextSlide}
          />
        )}
      </section>
      {slides.length >= 2 && (
        <div className={styles.miniatures}>
          {slides.map((slide, index) => (
            <img
              key={slide}
              src={slide.image}
              className={styles.mini}
              onClick={() => changeToSlide(index)}
              alt="mini-img"
            />
          ))}
        </div>
      )}
    </>
  );
}

export default Carousel;
