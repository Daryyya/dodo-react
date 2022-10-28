import React from "react";
import Buttons from "../Buttons";
import Card from '../Card'
import '../Card/image.png'
import Section from '../Section'

const UIkit = () => {
  return (
    <div>
      
        <Section>
        <Card desc='Пикантная пепперони, моцарелла, томатный соус' altImage='Пицца из половинок' name='Пицца из половинок' price='от 600 ₽' btntext='Собрать'/>
        <Card desc='Пикантная пепперони, моцарелла, томатный соус' altImage='Пицца из половинок' name='Пицца из половинок' price='от 600 ₽' btntext='Собрать'/>
        <Card desc='Пикантная пепперони, моцарелла, томатный соус' altImage='Пицца из половинок' name='Пицца из половинок' price='от 600 ₽' btntext='Собрать'/>
        <Card desc='Пикантная пепперони, моцарелла, томатный соус' altImage='Пицца из половинок' name='Пицца из половинок' price='от 600 ₽' btntext='Собрать'/>
        <Card desc='Пикантная пепперони, моцарелла, томатный соус' altImage='Пицца из половинок' name='Пицца из половинок' price='от 600 ₽' btntext='Собрать'/>
        </Section>
        
    
      <Buttons type="lite">Выбрать</Buttons>
      <Buttons type="orange">Собрать</Buttons>
    </div>
  );
};

export default UIkit;
