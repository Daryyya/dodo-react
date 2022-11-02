import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
// import Home from "./pages/Home";
import UIkit from "./pages/UIkit/UIkit";
import Section from "./Section";
import Card from "./Card/Card";
import pizza from "./Pizza/pizza";
import combo from "./Combo/combo";
import snack from "./Snack/snack";
import desert from "./Desert/desert";
import drink from "./Drink/drink";
import Basket from "./Basket/Basket";

const savedChoices = JSON.parse(localStorage.getItem("choiseCard")) ?? [];

function App() {
  const [choice, setChoise] = useState(savedChoices);

  const choices = (id) => setChoise((p) => [...p, id]);
  const unchoices = (id) => setChoise((p) => p.filter((elem) => elem !== id));

  useEffect(() => {
    localStorage.setItem("choiseCard", JSON.stringify(choice));
  }, [choice]);

  return (
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route
        path="/"
        element={
          <Section title="Пицца" id="pizza">
            {pizza.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </Section>
        }
      />
      <Route
        path="/pizza"
        element={
          <Section title="Пицца" id="pizza">
            {pizza.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </Section>
        }
      />
      <Route
        path="/combo"
        element={
          <Section title="Комбо" id="combo">
            {combo.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </Section>
        }
      />
      <Route
        path="/snack"
        element={
          <Section title="Закуски" id="snack">
            {snack.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </Section>
        }
      />
      <Route
        path="/desserts"
        element={
          <Section title="Десерты" id="desserts">
            {desert.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </Section>
        }
      />
      <Route
        path="/drinks"
        element={
          <Section title="Напитки" id="drinks">
            {drink.map((item) => (
              <Card
                key={item.id}
                item={item}
                choice={choice}
                isChoice={choice?.includes(item.id)}
                choices={choices}
                unchoices={unchoices}
              />
            ))}
          </Section>
        }
      />
      <Route path="/uikit" element={<UIkit />} />
      <Route
        path="/basket"
        element={
          <Basket choice={choice} unchoices={unchoices} choices={choices} />
        }
      />
    </Routes>
  );
}

export default App;
