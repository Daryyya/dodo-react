import React, {useEffect, useState} from "react";
import Card from "../Card/Card";
import Section from "../Section";
import pizza from "../Pizza/pizza";
import combo from "../Combo/combo";
import snack from "../Snack/snack";
import desert from "../Desert/desert";
import drink from "../Drink/drink";
import Portal from "../Portal";
import Modal from "../Modal";



const Main = ({setIsOpen, isOpen, setId, id}) => {

  const [data, setData] = useState([]);

  useEffect(() => {
    setData((p) => [...p, ...pizza])
    setData((p) => [...p, ...combo])
    setData((p) => [...p, ...snack])
    setData((p) => [...p, ...desert])
    setData((p) => [...p, ...drink])
  }, [])

  console.log(data)

  

  // const [id, setId] = useState(1);


    // console.log(isOpen)
    // console.log(id)
  
 
  return (
    <main>
      <Section title="Пицца" id="pizza">
        {pizza.map((item) => (
          <Card key={item.id} item={item} setIsOpen={setIsOpen} setId={setId}/>
        ))}
      </Section>
      <Section title="Комбо" id="combo">
        {combo.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </Section>
      <Section title="Закуски" id="snack">
        {snack.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </Section>
      <Section title="Десерты" id="desserts">
        {desert.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </Section>
      <Section title="Напитки" id="drinks">
        {drink.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </Section>
      <Portal>
        {
          isOpen && <Modal setIsOpen={setIsOpen} id ={id} data={data}/>
        }
      </Portal>
    </main>
  );
};

export default Main;
