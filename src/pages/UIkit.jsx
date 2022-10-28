import React from "react";
import Buttons from "../Buttons";
import OfferCard from "../OfferCard";
import Card from "../Card";
import "../Card/image.png";
import Section from "../Section";
import WrapperOfferCard from "../WrapperOfferCard";
import cardItem from "../OfferCard/OfferCardObj/Obj.js";

const UIkit = () => {
  return (
    <div>
      <Section>
        <Card
          desc="Пикантная пепперони, моцарелла, томатный соус"
          altImage="Пицца из половинок"
          name="Пицца из половинок"
          price="от 600 ₽"
          btntext="Собрать"
        />
        <Card
          desc="Пикантная пепперони, моцарелла, томатный соус"
          altImage="Пицца из половинок"
          name="Пицца из половинок"
          price="от 600 ₽"
          btntext="Собрать"
        />
        <Card
          desc="Пикантная пепперони, моцарелла, томатный соус"
          altImage="Пицца из половинок"
          name="Пицца из половинок"
          price="от 600 ₽"
          btntext="Собрать"
        />
        <Card
          desc="Пикантная пепперони, моцарелла, томатный соус"
          altImage="Пицца из половинок"
          name="Пицца из половинок"
          price="от 600 ₽"
          btntext="Собрать"
        />
        <Card
          desc="Пикантная пепперони, моцарелла, томатный соус"
          altImage="Пицца из половинок"
          name="Пицца из половинок"
          price="от 600 ₽"
          btntext="Собрать"
        />
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
