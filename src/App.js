import { Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
import UIkit from "./pages/UIkit/UIkit";
import Section from "./Section";
import Card from "./Card/Card";
import pizza from "./Pizza/pizza";
import combo from "./Combo/combo";
import snack from "./Snack/snack";
import desert from "./Desert/desert";
import drink from "./Drink/drink";

function App() {
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
              <Card key={item.id} item={item} />
            ))}
          </Section>
        }
      />
      <Route path="/uikit" element={<UIkit />} />
    </Routes>
  );
}

export default App;
