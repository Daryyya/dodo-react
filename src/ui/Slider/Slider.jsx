import React from "react";
import { useState, useEffect } from "react";
import s from "./Slider.module.css";
import { img } from "./slide";
// import img1 from "./meatless-1x.jpg";
// import img2 from "./meatless-2x.jpg";

const Slider = () => {
  // Индекс текущего слайда
  const [activeIndex, setActiveIndex] = useState(0);

  // Хук Effect
  useEffect(() => {
    // Запускаем интервал
    const interval = setInterval(() => {
      // Меняем состояние
      setActiveIndex((current) => {
        // Вычисляем индекс следующего слайда, который должен вывестись
        const res = current === img.length - 1 ? 0 : current + 1;
        // Возвращаем индекс
        return res;
      });
    }, 5000);
    // Выключаем интервал
    return () => clearInterval();
  }, []);

  // Вычисляем индекс предыдущего слайда
  const prevImgIndex = activeIndex ? activeIndex - 1 : img.length - 1;
  // Вычисляем индекс следующего слайда
  const nextImgIndex = activeIndex === img.length - 1 ? 0 : activeIndex + 1;

  return (
    // <div className={s.slider}>
    //   <img
    //     className={s.slider__img}
    //     src={img1}
    //     srcSet={img2}
    //     width="1060"
    //     height="300"
    //     alt="Предложения без мяса"
    //   />
    // </div>
    <div className={s.slider_wrapper}>
      <div className={s.slider}>
        <div className={s.slider_img_prev} key={prevImgIndex}>
          {img[prevImgIndex]}
        </div>
        <div className={s.slider_img} key={activeIndex}>
          {img[activeIndex]}
        </div>
        <div className={s.slider_img_next} key={nextImgIndex}>
          {img[nextImgIndex]}
        </div>
      </div>
    </div>
  );
};

export default Slider;
