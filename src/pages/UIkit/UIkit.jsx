import React from "react";
import Buttons from "../../Buttons";
import Card from "../../Card/Card";
import Section from "../../Section";
import pizza from "../../Pizza/pizza.js";
import combo from "../../Combo/combo.js";
import snack from "../../Snack/snack.js";
import desert from "../../Desert/desert.js";
import drink from "../../Drink/drink.js";
import OfferCard from "../../OfferCard";
import WrapperOfferCard from "../../WrapperOfferCard";
import cardItem from "../../OfferCard/OfferCardObj/Obj.js";
import Header from "../../Header/index.jsx";
import Navigation from "../../Navigation/Navigation.jsx";
import { WrapperNav } from "../../WrapperNav/WrapperNav";
import { title } from "./Array.js";

const UIkit = () => {
  return (
    <div>
      <Header />
      <WrapperNav>
        {title.map((elem) => (
          <Navigation title={elem.title} href={elem.href} />
        ))}
      </WrapperNav>
      <Section>
        {pizza.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </Section>
      <Section id="combo">
        {combo.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </Section>
      <Section id="snack">
        {snack.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </Section>
      <Section id="desserts">
        {desert.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </Section>
      <Section id="drinks">
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
