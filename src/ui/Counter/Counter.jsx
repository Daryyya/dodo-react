import React from "react";
import { useState } from "react";
import s from "./Counter.module.css";

const Counter = ({ count, setCount }) => {
  return (
    <div className={s.counter}>
      <button
        disabled={count === 1}
        className={s.btn}
        onClick={() => setCount(count - 1)}
      >
        <p className={s.p}>-</p>
      </button>
      <p>{count}</p>
      <button className={s.btn} onClick={() => setCount(count + 1)}>
        <p className={s.p}>+</p>
      </button>
    </div>
  );
};

export default Counter;
