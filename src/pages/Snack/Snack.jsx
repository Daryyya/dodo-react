import React from "react";
import Main from "../../component/Main";
import snack from "./snack";
import Card from "../../ui/Card/Card";
import Section from "../../ui/Section";

const Snack = ({ isOpen, setIsOpen, id, setId, choices, unchoices, choice }) => {
  return (
    <Main isOpen={isOpen} setIsOpen={setIsOpen} id={id} setId={setId}>
      <Section title="Закуски" id="snack">
        {snack.map((item) => (
          <Card key={item.id} item={item} setIsOpen={setIsOpen} setId={setId} isChoice={choice?.includes(item.id)}
          choices={choices}
          unchoices={unchoices}/>
        ))}
      </Section>
    </Main>
  );
};

export default Snack;
