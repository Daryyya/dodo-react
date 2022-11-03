import { Route, Routes } from "react-router-dom";
// import { useEffect, useState } from "react";
import React, { useState, useEffect } from "react";
import UIkit from "./pages/UIkit/UIkit";
import Basket from "./Basket/Basket";
import Section from "./ui/Section";
import Card from "./ui/Card/Card";
import drink from "./pages/Drink/drink";
import Pizza from "./pages/Pizza/Pizza.jsx";
import Combo from "./pages/Combo/Combo.jsx";
import Snack from "./pages/Snack/Snack.jsx";
import Desert from "./pages/Desert/Desert.jsx";
import Drink from "./pages/Drink/Drink.jsx";
import Home from "./pages/Home";

const savedChoices = JSON.parse(localStorage.getItem("choiseCard")) ?? [];

function App() {
  const [choice, setChoise] = useState(savedChoices);

  const choices = (id) => setChoise((p) => [...p, id]);
  const unchoices = (id) => setChoise((p) => p.filter((elem) => elem !== id));

  useEffect(() => {
    localStorage.setItem("choiseCard", JSON.stringify(choice));
  }, [choice]);

  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState(0);
  console.log(isOpen);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/pizza"
        element={
          <Pizza isOpen={isOpen} setIsOpen={setIsOpen} id={id} setId={setId} />
        }
      />
      <Route
        path="/combo"
        element={
          <Combo isOpen={isOpen} setIsOpen={setIsOpen} id={id} setId={setId} />
        }
      />
      <Route
        path="/snack"
        element={
          <Snack isOpen={isOpen} setIsOpen={setIsOpen} id={id} setId={setId} />
        }
      />
      <Route
        path="/desert"
        element={
          <Desert isOpen={isOpen} setIsOpen={setIsOpen} id={id} setId={setId} />
        }
      />
      <Route
        path="/drink"
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
          // <Drink isOpen={isOpen} setIsOpen={setIsOpen} id={id} setId={setId}/>
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
