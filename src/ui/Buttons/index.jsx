import React from "react";
import s from "./style.module.css";

const Buttons = ({
  type = "orange",
  children,
  setIsOpen,
  id,
  setId,
  isChoice,
  unchoices,
  choices,
}) => {
  return (
    <button
      onClick={() => {
        // setIsOpen(true);
        // setId(id);
        isChoice ? unchoices(id) : choices(id);
      }}
      className={type === "orange" ? s.global__button : s.lite__button}
    >
      {children}
    </button>
  );
};

export default Buttons;
