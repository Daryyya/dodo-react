import React from "react";
import s from "./style.module.css";

const ButtonModal = ({
  id,
  type = "orange",
  children,
  setIsOpen,
  setId,
  isChoice,
  unchoices,
  choices,
}) => {
  return (
    <button
      onClick={() => {setIsOpen(true);
      setId(id);}}
      className={type === "orange" ? s.global__button : s.lite__button}
    >
      {children}
    </button>
  );
};

export default ButtonModal;
