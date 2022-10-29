import React from "react";
import style from "./style.module.css";

const Card = ({ desc, name, price, btntext }) => {
  return (
    <div className={style.card}>
      <div className={style.card__img}>
        {/* <img src="./image.svg" alt={altImage} width="220" height="220" /> */}
      </div>
      <p className={style.card__name}>{name}</p>
      <p className={style.card__desc}>{desc}</p>
      <div className={style.card__info}>
        <p className={style.card__price}>{price}</p>
        <button className={style.card__btn}>{btntext}</button>
      </div>
    </div>
  );
};

export default Card;
