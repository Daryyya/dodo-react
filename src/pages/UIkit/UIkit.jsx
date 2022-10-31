import React from "react";
import Buttons from "../../Buttons";
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
      <Navigation />
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
