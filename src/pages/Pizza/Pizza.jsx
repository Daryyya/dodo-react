import React from "react";
import pizza from "./pizza";
import Main from "../../component/Main";
import Section from "../../ui/Section";
import Card from "../../ui/Card/Card";

const Pizza = ({isOpen, setIsOpen, id, setId, data, choices, unchoices, choice}) => {
  return (
    <Main isOpen={isOpen} setIsOpen={setIsOpen} id={id} setId={setId} data={data} choices={choices} unchoices={unchoices} choice={choice}>
      <Section title="Пицца" id="pizza">
        {pizza.map((item) => (
          <Card key={item.id} item={item} setIsOpen={setIsOpen} setId={setId} />
        ))}
      </Section>
    </Main>
  );
};

export default Pizza;
