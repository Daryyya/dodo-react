import React, { useState } from "react";
import s from "./Basket.module.css";
import Card1 from "../Card 1/Card1";
import { Link } from "react-router-dom";
import logo from "./logo.svg";

const Basket = ({ choice, unchoices, choices, data }) => {
  const choiceCards = data.filter((elem) => choice.includes(elem.id));
  const [price, setPrice] = useState(0);

  console.log(price);
  return (
    <>
      {/* временно */}
      <div className={s.container}>
        {choiceCards.map((elem) => (
          <Card1
            item={elem}
            key={elem.id}
            choices={choices}
            unchoices={unchoices}
            id={elem.id}
            isChoice={choice?.includes(elem.id)}
            setPrice={setPrice}
          />
        ))}
        <div className={s.sum}>
          <Link to="/">
            <button className={s.btn}>Вернуться в меню</button>
          </Link>
          <p className={s.sum_item}>Сумма заказа: {price}</p>
        </div>
      </div>
      <div className={s.footer}>
        <div className={s.wrap}>
          <a className={s.num}>8-800-302-00-60</a>
          <p className={s.p}>Звонок бесплатный</p>
        </div>
        <div className={s.footer_info}>
          <div className={s.info_logo}>
            <img
              src={logo}
              width="276"
              height="22"
              alt="Footer Logo"
              className={s.global_img}
            />
          </div>
          <div className={s.info_links}>
            <a className={s.info_link} href="#">
              Правовая информация
            </a>
            <a className={s.info_link} href="#">
              Калорийность и состав
            </a>
            <a className={s.info_link} href="#">
              Помощь
            </a>
          </div>
          <a className={s.info_link}>feedback@dodopizza.com</a>
        </div>
      </div>
    </>
  );
};

export default Basket;
