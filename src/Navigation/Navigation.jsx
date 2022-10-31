import React from "react";
import s from "./Navigation.module.css";

const Navigation = ({ title, href }) => {
  return (
    <li>
      <a href={href} className={s.navigation__link}>
        {title}
      </a>
    </li>
  );
};

export default Navigation;
