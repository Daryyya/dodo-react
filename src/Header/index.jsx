import React from "react";
import s from "./style.module.css";
import logo from "./images/logo.svg";
import logoText from "./images/logo-text-head.svg";

const index = () => {
  return (
    <header className={s.header}>
      <div className={s.header__logo}>
        <div className={s.logo__img}>
          <img
            className={s.global__img}
            src={logo}
            width="42"
            height="44"
            alt="Logo"
          />
        </div>
        <div className={s.logo__text}>
          <img
            className={s.global__img}
            src={logoText}
            width="191"
            alt="Dodo Pizza"
          />
          <h1 className={s.logo__title}>Сеть пиццерий №1 в России</h1>
        </div>
      </div>
      <div className={s.header__phone}>
        <a href="tel:8-800-3020060" className={s.phone__number}>
          8 800 302-00-60
        </a>
        <p className={s.phone__hint}>Звонок бесплатный</p>
      </div>
    </header>
  );
};

export default index;
