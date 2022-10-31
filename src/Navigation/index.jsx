import React from "react";
import s from "./style.module.css";

const index = () => {
  return (
    <nav className={s.navigation}>
      <ul className={s.navigation__menu}>
        <li>
          <a href="#pizza" className={s.navigation__link}>
            Пицца
          </a>
        </li>
        <li>
          <a href="#combo" className={s.navigation__link}>
            Комбо
          </a>
        </li>
        <li>
          <a href="#starters" className={s.navigation__link}>
            Закуски
          </a>
        </li>
        <li>
          <a href="#desserts" className={s.navigation__link}>
            Десерты
          </a>
        </li>
        <li>
          <a href="#drinks" className={s.navigation__link}>
            Напитки
          </a>
        </li>
        <li>
          <a href="#other" className={s.navigation__link}>
            Другие&nbsp;товары
          </a>
        </li>
      </ul>
      <a className={s.global__button_basket} href="#basket">
        Корзина
      </a>
    </nav>
  );
};

export default index;
