import React, { useState } from "react";
import style from "./style.module.css";
import { ingredients } from "./ingredients.js";
import Buttons from "../Buttons";
import pizza from "../../pages/Pizza/pizza";
import close from "./close.svg";
import { useEffect } from "react";

const Modal = ({
  setIsOpen,
  id,
  data,
  setId,
  isChoice,
  choices,
  unchoices,
}) => {
  const card = (data || []).find((el) => el.id === id);
  const locPrice = pizza.find((el) => el.id === id).price;
  const ingredient = card.ingredients;
  const [countPrice, setCountPrice] = useState(locPrice);
  const [countPrice2, setCountPrice2] = useState(0);
  const [addIngredients, setAddIngredients] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(countPrice + countPrice2);
  }, [countPrice, countPrice2]);

  card.price = totalPrice;
  return (
    <div className={style.popup}>
      <div className={style.modal}>
        <div className={style.imgWrap}>
          <img
            className={style.img}
            src={card.image_2x}
            alt=""
            width={372}
            height={372}
          />
        </div>
        <div className={style.info}>
          <p className={style.title}>{card.name}</p>
          <p className={style.text}>30 см, традиционное тесто, 480 г</p>
          <div className={style.checkWrap}>
            {ingredient.map(({ name, removable }) =>
              removable ? (
                <label>
                  <input className={style.checkInput} type="checkbox" />

                  <span
                    className={style.ingredientNameRemove}
                  >{`${name} `}</span>
                  <span className={style.check}></span>
                </label>
              ) : (
                <span className={style.ingredientName}>{`${name}, `}</span>
              )
            )}
          </div>
          <div className={style.radioWrap}>
            <label>
              <input
                onChange={() => setCountPrice(locPrice - 100)}
                className={style.radioInput}
                type="radio"
                name="size"
              />
              <span className={style.radio}>Маленькая</span>
            </label>
            <label>
              <input
                onChange={() => setCountPrice(locPrice)}
                className={style.radioInput}
                type="radio"
                name="size"
              />
              <span className={style.radio}>Средняя</span>
            </label>
            <label>
              <input
                onChange={() => setCountPrice(locPrice + 100)}
                className={style.radioInput}
                type="radio"
                name="size"
              />
              <span className={style.radio}>Большая</span>
            </label>
          </div>

          <div className={style.radioWrap}>
            <label>
              <input className={style.radioInput} type="radio" name="size" />
              <span className={style.radio}>Традиционное</span>
            </label>
            <label>
              <input className={style.radioInput} type="radio" name="size" />
              <span className={style.radio}>Тонкое</span>
            </label>
          </div>

          <h2 className={style.addToPizza}>Добавить в пиццу</h2>
          <div className={style.addToPizzaContainer}>
            {ingredients.map((el) => (
              <div
                div
                className={
                  addIngredients.includes(el.image) ? style.orange : style.card
                }
                key={el.image}
                onClick={() => {
                  if (addIngredients.includes(el.image)) {
                    setAddIngredients((p) =>
                      p.filter((elem) => elem !== el.image)
                    );

                    setCountPrice2((p) => p - el.price);
                  } else {
                    setAddIngredients((p) => [...p, el.image]);

                    setCountPrice2((p) => p + el.price);

                    console.log("plus");
                  }
                }}
              >
                <img src={el.image} />
                <h2 className={style.cardText}>{el.name}</h2>
                <p className={style.cardPrice}>{`${el.price}₽`}</p>
              </div>
            ))}
          </div>
          <Buttons
            type="orange"
            choices={choices}
            unchoices={unchoices}
            isChoice={isChoice}
            setIsOpen={setIsOpen}
            id={id}
            setId={setId}
          >
            {isChoice ? "Удалить" : `Добавить в корзину за ${totalPrice}`}
          </Buttons>
          <button className={style.close} onClick={() => setIsOpen(false)}>
            <img src={close} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
