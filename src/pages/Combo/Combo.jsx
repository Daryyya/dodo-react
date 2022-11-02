import React from "react";
import Main from "../../component/Main";
import combo from "./combo";
import Section from "../../ui/Section";
import Card from "../../ui/Card/Card";

const Combo = ({ isOpen, setIsOpen, id, setId }) => {
  return (
    <Main isOpen={isOpen} setIsOpen={setIsOpen} id={id} setId={setId}>
      <Section title="Комбо" id="combo">
        {combo.map((item) => (
          <Card key={item.id} item={item} setIsOpen={setIsOpen} setId={setId} />
        ))}
      </Section>
    </Main>
  );
};

export default Combo;
