import React from "react";
import Main from "../../component/Main";
import desert from "./desert";
import Section from "../../ui/Section";
import Card from "../../ui/Card/Card";

const Deser = ({ isOpen, setIsOpen, id, setId }) => {
  return (
    <Main isOpen={isOpen} setIsOpen={setIsOpen} id={id} setId={setId}>
      <Section title="Десерты" id="desserts">
        {desert.map((item) => (
          <Card key={item.id} item={item} setIsOpen={setIsOpen} setId={setId} />
        ))}
      </Section>
    </Main>
  );
};

export default Deser;
