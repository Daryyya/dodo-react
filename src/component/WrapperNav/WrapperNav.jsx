import React from "react";
import Buttons from "../../ui/Buttons";
import { Link } from "react-router-dom";
import s from "./WrapperNav.module.css";

export const WrapperNav = ({ children }) => {
  return (
    <div className={s.container}>
      <nav className={s.navigation}>
        <ul className={s.navigation__menu}>{children}</ul>
        {/* <Buttons children="Корзина" /> */}
        <Link to='/basket'>Корзина</Link>
      </nav>
    </div>
  );
};
