import React from "react";
import Buttons from "../Buttons";
import s from "./WrapperNav.module.css";

export const WrapperNav = ({ children }) => {
  return (
    <nav className={s.navigation}>
      <ul className={s.navigation__menu}>{children}</ul>
      <Buttons children="Корзина" />
    </nav>
  );
};
