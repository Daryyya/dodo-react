import React from "react";
import Buttons from "../Buttons";
import Card from "../Card";
import Section from "../Section";
import pizza from "../Pizza/pizza.js";
import combo from "../Combo/combo.js";
import snack from "../Snack/snack.js";
import desert from "../Desert/desert.js";
import drink from "../Drink/drink.js";
import OfferCard from "../OfferCard";
import WrapperOfferCard from "../WrapperOfferCard";
import cardItem from "../OfferCard/OfferCardObj/Obj.js";
import Header from "../Header/index.jsx";
import Navigation from "../Navigation/index.jsx";

const UIkit = () => {
  return (
    <div>
      <Header />
      <Navigation />
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
      <WrapperOfferCard>
        {cardItem.map((elem) => (
          <OfferCard
            key={elem.id}
            id={elem.id}
            alt={elem.alt}
            src={elem.src}
            srcset={elem.srcset}
            title={elem.title}
            price={elem.price}
          />
        ))}
      </WrapperOfferCard>
    </div>
  );
};

export default UIkit;
