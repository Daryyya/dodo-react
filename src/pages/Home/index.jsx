import React from "react";
import Main from "../../Main";
import Header from "../../Header";
import { title } from "./Array.js";
import { WrapperNav } from "../../WrapperNav/WrapperNav";
import Navigation from "../../Navigation/Navigation";
import Offer from "../../Offer/Offer";

const Home = () => {
  return (
    <>
      <Header />
      <WrapperNav>
        {title.map((elem) => (
          <Navigation title={elem.title} to={elem.href} />
        ))}
      </WrapperNav>
      <Offer />
      <Main />
    </>
  );
};

export default Home;
