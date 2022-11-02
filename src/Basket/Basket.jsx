import React from "react";
import Card from "../ui/Card/Card";
import drink from "../pages/Drink/drink";

const Basket = ({ choice, unchoices, choices }) => {
  const choiceCards = drink.filter((elem) => choice.includes(elem.id));
  console.log(choiceCards);
  console.log(choice);

  return (
    <div>
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
