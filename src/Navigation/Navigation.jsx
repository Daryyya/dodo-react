import React from "react";
import { Link } from "react-router-dom";
import s from "./Navigation.module.css";

const Navigation = ({ title, to }) => {
  return (
    <>
      <Link to={to} className={s.navigation__link}>
        {title}
      </Link>
    </>
  );
};

export default Navigation;
