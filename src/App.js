import { Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
import React, {useState} from "react";
import UIkit from "./pages/UIkit/UIkit";
import Section from "./ui/Section";
import Card from "./ui/Card/Card";
import pizza from "./pages/Pizza/pizza";
import combo from "./pages/Combo/combo";
import snack from "./pages/Snack/snack";
import desert from "./pages/Desert/desert";
import drink from "./pages/Drink/drink";
import Pizza from "./pages/Pizza/Pizza";
import Combo from "./pages/Combo/Combo";
import Snack from "./pages/Snack/Snack";
import Desert from "./pages/Desert/Desert";
import Drink from "./pages/Drink/Drink";
import Home from "./pages/Home";

function App() {

  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState(0);
  console.log(isOpen)

  return (
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route
        path="/"
        element={
          // <Pizza isOpen={isOpen} setIsOpen={setIsOpen} id={id} setId={setId}/>
          <Home/>
        }
      />
      <Route
        path="/pizza"
        element={
          <Pizza isOpen={isOpen} setIsOpen={setIsOpen} id={id} setId={setId}/>
        }
      />
      <Route
        path="/combo"
        element={
          <Combo isOpen={isOpen} setIsOpen={setIsOpen} id={id} setId={setId}/>
        }
      />
      <Route
        path="/snack"
        element={
          <Snack isOpen={isOpen} setIsOpen={setIsOpen} id={id} setId={setId}/>
        }
      />
      <Route
        path="/desert"
        element={
          <Desert isOpen={isOpen} setIsOpen={setIsOpen} id={id} setId={setId}/>
        }
      />
      <Route
        path="/drink"
        element={
          <Drink isOpen={isOpen} setIsOpen={setIsOpen} id={id} setId={setId}/>
        }
      />
      <Route path="/uikit" element={<UIkit />} />
    </Routes>
  );
}

export default App;
