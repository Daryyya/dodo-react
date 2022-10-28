import React from "react";
import s from "./style.module.css";

const Buttons = ({ type = "orange", children }) => {
  return (
    <button className={type === "orange" ? s.global__button : s.lite__button}>
      {children}
    </button>
  );
};

export default Buttons;
