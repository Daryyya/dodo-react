import React from "react";
import Buttons from "../Buttons";
import style from "./Card.module.css";

const Card = ({ item, setIsOpen, setId, isChoice, unchoices, choices }) => {
  const { image_1x, image_2x, name, description, price, id, type } = item;
  console.log("render");
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
        {
          type === 'tocart' && <Buttons
          type='lite'
          choices={choices}
          unchoices={unchoices}
          isChoice={isChoice}
          setIsOpen={setIsOpen}
          id={id}
          setId={setId}
        >
          В корзину
        </Buttons>
        }
        
      </div>
    </div>
  );
};

export default Card;
