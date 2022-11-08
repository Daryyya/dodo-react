import { Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import UIkit from "./pages/UIkit/UIkit";
import Basket from "./Basket/Basket";
import Pizza from "./pages/Pizza/Pizza.jsx";
import Combo from "./pages/Combo/Combo.jsx";
import Snack from "./pages/Snack/Snack.jsx";
import Desert from "./pages/Desert/Desert.jsx";
import Drink from "./pages/Drink/Drink.jsx";
import pizza from "./pages/Pizza/pizza";
import combo from "./pages/Combo/combo";
import snack from "./pages/Snack/snack";
import desert from "./pages/Desert/desert";
import drink from "./pages/Drink/drink";
import Home from "./pages/Home";

const savedChoices = JSON.parse(localStorage.getItem("choiseCard")) ?? [];

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData((p) => [...p, ...pizza]);
    setData((p) => [...p, ...combo]);
    setData((p) => [...p, ...snack]);
    setData((p) => [...p, ...desert]);
    setData((p) => [...p, ...drink]);
  }, []);

  const [choice, setChoise] = useState(savedChoices);

  const choices = (id) => setChoise((p) => [...p, id]);
  const unchoices = (id) => setChoise((p) => p.filter((elem) => elem !== id));

  useEffect(() => {
    localStorage.setItem("choiseCard", JSON.stringify(choice));
  }, [choice]);

  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/pizza"
        element={
          <Pizza isOpen={isOpen} setIsOpen={setIsOpen} id={id} setId={setId} data={data} choice={choice}
          choices={choices}
          unchoices={unchoices}/>
        }
      />
      <Route
        path="/combo"
        element={
          <Combo isOpen={isOpen} setIsOpen={setIsOpen} id={id} setId={setId} choice={choice}
          choices={choices}
          unchoices={unchoices}/>
        }
      />

      <Route
        path="/snack"
        element={
          <Snack
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            id={id}
            setId={setId}
            choice={choice}
            choices={choices}
            unchoices={unchoices}
          />
        }
      />
      <Route
        path="/desert"
        element={
          <Desert
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            id={id}
            setId={setId}
            choice={choice}
            choices={choices}
            unchoices={unchoices}
          />
        }
      />
      <Route
        path="/drink"
        element={
          <Drink
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            id={id}
            setId={setId}
            choice={choice}
            choices={choices}
            unchoices={unchoices}
          />
        }
      />

      <Route path="/uikit" element={<UIkit />} />
      <Route
        path="/basket"
        element={
          <Basket
            choice={choice}
            unchoices={unchoices}
            choices={choices}
            data={data}
          />
        }
      />
    </Routes>
  );
}

export default App;
