import React from "react";
import s from "./style.module.css";

const Button1 = ({ id, children, isChoice, unchoices, choices, setPrice, price, count }) => {
  return (
    <button
      className={s.btn}
      onClick={() => {unchoices(id); setPrice((p) => p - price * count)}  }
    >
      {children}
    </button>
  );
};

export default Button1;
