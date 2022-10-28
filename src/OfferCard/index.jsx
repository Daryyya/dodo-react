import React from "react";
import s from "./index.module.css";

const index = ({ alt, srcset, src, title, price }) => {
  return (
    <div className={s.new__card}>
      <div>
        <a className={s.global__card_link} href="#"></a>
        <img
          className={s.global__img}
          src={src}
          srcSet={srcset}
          width="76"
          height="76"
          alt={alt}
        />
      </div>
      <div className={s.new__text}>
        <p className={s.new__title}>{title}</p>
        <p className={s.new__description}>{price}</p>
      </div>
    </div>
  );
};

export default index;
