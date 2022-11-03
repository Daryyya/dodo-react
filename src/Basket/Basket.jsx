import React from "react";
import s from "./Basket.module.css";
import Card1 from "../Card 1/Card1";
import { Link } from "react-router-dom";

const Basket = ({ choice, unchoices, choices, data }) => {
  const choiceCards = data.filter((elem) => choice.includes(elem.id));
  return (
    <>
      {/* временно */}
      <Link to="/">Home</Link>
      <div className={s.container}>
        {choiceCards.map((elem) => (
          <Card1
            item={elem}
            key={elem.id}
            choices={choices}
            unchoices={unchoices}
            id={elem.id}
            isChoice={choice?.includes(elem.id)}
          />
        ))}
      </div>
    </>
  );
};

export default Basket;
