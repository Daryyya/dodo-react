import React from "react";
import Buttons from "../Buttons";
import style from "./style.module.css";

const Card = ({ item }) => {
  const { image_1x, image_2x, name, description, price } = item;
  return (
    <div className={style.card}>
      <div className={style.card__img}>
        <img src={image_1x} srcSet={image_2x} width="220" height="220" />
      </div>
      <p className={style.card__name}>{name}</p>
      <p className={style.card__desc}>{description}</p>
      <div className={style.card__info}>
        <p className={style.card__price}>{price}</p>
        <Buttons>Собрать</Buttons>
      </div>
    </div>
  );
};

export default Card;
