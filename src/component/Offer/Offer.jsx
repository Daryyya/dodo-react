import React from "react";
import style from "./style.module.css";
import OfferCard from "../OfferCard";
import WrapperOfferCard from "../WrapperOfferCard";
import cardItem from "../OfferCard/OfferCardObj/Obj.js";

const Offer = () => {
  return (
    <section className={style.containerOffer}>
      <h2 className={style.title}>Новое и популярное</h2>
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
    </section>
  );
};

export default Offer;
