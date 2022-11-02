import React from "react";
import Buttons from "../../ui/Buttons";

import Header from "../../component/Header/index.jsx";
import Navigation from "../../component/Navigation/Navigation.jsx";
import { WrapperNav } from "../../component/WrapperNav/WrapperNav";
import { title } from "../Home/Array.js";

import Basket from "../../Basket/Basket";

import Slider from "../../ui/Slider/Slider";


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
