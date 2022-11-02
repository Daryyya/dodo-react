import React from "react";
import s from "./Basket.module.css";
import Card1 from '../Card 1/Card1'
import drink from "../pages/Drink/drink";

const Basket = ({ choice, unchoices, choices }) => {
  const choiceCards = drink.filter((elem) => choice.includes(elem.id));
  console.log(choiceCards);
  console.log(choice);

  return (

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
  );
};

export default Basket;
