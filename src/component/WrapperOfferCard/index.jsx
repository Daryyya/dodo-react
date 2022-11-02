import React from "react";
import s from "./index.module.css";

const index = ({ children }) => {
  return <div className={s.global__grid_container_new}>{children}</div>;
};

export default index;
