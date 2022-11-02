import React from "react";
import Main from "../../component/Main";
import drink from "./drink";
import Section from "../../ui/Section";
import Card from "../../ui/Card/Card";

const Drink = ({ isOpen, setIsOpen, id, setId }) => {
  return (
    <Main isOpen={isOpen} setIsOpen={setIsOpen} id={id} setId={setId}>
      <Section title="Напитки" id="drinks">
        {drink.map((item) => (
          <Card key={item.id} item={item} setIsOpen={setIsOpen} setId={setId} />
        ))}
      </Section>
    </Main>
  );
};

export default Drink;
