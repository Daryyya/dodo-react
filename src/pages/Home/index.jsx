import React, {useState} from "react";
import Main from "../../Main";
import Header from "../../Header";
import { title } from "./Array.js";
import { WrapperNav } from "../../WrapperNav/WrapperNav";
import Navigation from "../../Navigation/Navigation";
import Offer from "../../Offer/Offer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState(0);
  console.log(isOpen)
  return (
    <>
      <Header />
      <WrapperNav>
        {title.map((elem) => (
          <Navigation title={elem.title} to={elem.href} />
        ))}
      </WrapperNav>
      <Offer />
      <Main setIsOpen={setIsOpen} setId={setId} isOpen={isOpen} id={id}/>
    </>
  );
};

export default Home;
