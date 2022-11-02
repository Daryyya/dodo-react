import React from "react";
import Card from "../Card 1/Card1";
import drink from "../Drink/drink";
import s from "./Basket.module.css";

const Basket = ({ choice, unchoices, choices }) => {
  const choiceCards = drink.filter((elem) => choice.includes(elem.id));
  console.log(choiceCards);
  console.log(choice);

  return (
    <div className={s.container}>
      {choiceCards.map((elem) => (
        <Card
          item={elem}
          key={elem.id}
          choices={choices}
          unchoices={unchoices}
          id={elem.id}
          isChoice={choice?.includes(elem.id)}
        />
      ))}
    </div>
  );
};

export default Basket;
