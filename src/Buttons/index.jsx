import React from "react";
import s from "./style.module.css";

const Buttons = ({
  id,
  type = "orange",
  children,
  isChoice,
  unchoices,
  choices,
}) => {
  return (
    <button
      onClick={() => (isChoice ? unchoices(id) : choices(id))}
      className={type === "orange" ? s.global__button : s.lite__button}
    >
      {children}
    </button>
  );
};

export default Buttons;
