import React from "react";
import ButtonModal from "../../ButtonModal/index.jsx";
import Buttons from "../Buttons/index.jsx";
import style from "./Card.module.css";

const Card = ({ item, setIsOpen, setId, isChoice, unchoices, choices }) => {
  const { image_1x, image_2x, name, description, price, id, type } = item;
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
        <p className={style.card__price}>{`${price}₽`}</p>
        {type === "tocart" && (
          <Buttons
            type="lite"
            choices={choices}
            unchoices={unchoices}
            isChoice={isChoice}
            setIsOpen={setIsOpen}
            id={id}
            setId={setId}
          >
            {isChoice ? "Удалить" : "В корзину"}
          </Buttons>
        )}
        {type === "tomodal" && (
          <ButtonModal
            type="orange"
            setIsOpen={setIsOpen}
            id={id}
            setId={setId}
          >
            Собрать
          </ButtonModal>
        )}
      </div>
    </div>
  );
};

export default Card;
