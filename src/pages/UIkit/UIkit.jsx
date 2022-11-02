import React from "react";
import Buttons from "../../Buttons";

import Header from "../../Header/index.jsx";
import Navigation from "../../Navigation/Navigation.jsx";
import { WrapperNav } from "../../WrapperNav/WrapperNav";
import { title } from "../Home/Array.js";
import Slider from "../../Slider/Slider";
import Basket from "../../Basket/Basket";

const UIkit = () => {
  return (
    <div>
      <Basket />
      <Slider />
      <Header />
      <WrapperNav>
        {title.map((elem) => (
          <Navigation title={elem.title} href={elem.href} />
        ))}
      </WrapperNav>
      <Buttons type="lite">Выбрать</Buttons>
      <Buttons type="orange">Собрать</Buttons>
    </div>
  );
};

export default UIkit;
