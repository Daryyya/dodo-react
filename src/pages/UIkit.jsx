import React from "react";
import Buttons from "../Buttons";
import Card from "../Card";
import "../Card/image.png";
import Section from "../Section";
import pizza from "../Pizza/pizza.js";
import combo from "../Combo/combo.js";
import snack from "../Snack/snack.js";
import desert from "../Desert/desert.js";
import drink from "../Drink/drink.js";

const UIkit = () => {
  return (
    <div>
      <Section>
        {pizza.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </Section>
      <Section>
        {combo.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </Section>
      <Section>
        {snack.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </Section>
      <Section>
        {desert.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </Section>
      <Section>
        {drink.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </Section>

      <Buttons type="lite">Выбрать</Buttons>
      <Buttons type="orange">Собрать</Buttons>
    </div>
  );
};

export default UIkit;
