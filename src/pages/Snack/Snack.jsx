import React from "react";
import Main from "../../component/Main";
import snack from "./snack";
import Card from "../../ui/Card/Card";
import Section from "../../ui/Section";

const Snack = ({ isOpen, setIsOpen, id, setId }) => {
  return (
    <Main isOpen={isOpen} setIsOpen={setIsOpen} id={id} setId={setId}>
      <Section title="Закуски" id="snack">
        {snack.map((item) => (
          <Card key={item.id} item={item} setIsOpen={setIsOpen} setId={setId} />
        ))}
      </Section>
    </Main>
  );
};

export default Snack;
