import React from "react";
import Button1 from "../Button1";
import style from "./Card1.module.css";
import button from "./Vector.jpg";

const Card1 = ({ item, setIsOpen, setId, isChoice, unchoices, choices }) => {
  const { image_1x, image_2x, name, description, price, id } = item;
  return (
    <div className={style.card}>
      <div className={style.card__img}>
        <img
          src={image_1x}
          srcSet={image_2x}
          width="220"
          height="220"
          alt="1"
        />
      </div>
      <p className={style.card__name}>{name}</p>
      <p className={style.card__desc}>{description}</p>
      <div className={style.card__info}>
        <p className={style.card__price}>{price}</p>
        <Button1
          choices={choices}
          unchoices={unchoices}
          isChoice={isChoice}
          setIsOpen={setIsOpen}
          id={id}
          setId={setId}
        >
          <img src={button} />
        </Button1>
      </div>
    </div>
  );
};

export default Card1;
