import React from "react";
import s from "./style.module.css";

const Button1 = ({ id, children, isChoice, unchoices, choices }) => {
  return (
    <button
      className={s.btn}
      onClick={() => (isChoice ? unchoices(id) : choices(id))}
    >
      {children}
    </button>
  );
};

export default Button1;
