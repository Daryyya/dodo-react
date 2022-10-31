import React from "react";
import Main from "../../Main";
import Header from "../../Header";
import { title } from "./Array.js";
import { WrapperNav } from "../../WrapperNav/WrapperNav";
import Navigation from "../../Navigation/Navigation";

const Home = () => {
  return (
    <>
      <Header />
      <WrapperNav>
        {title.map((elem) => (
          <Navigation title={elem.title} href={elem.href} />
        ))}
      </WrapperNav>
      <Main />
    </>
  );
};

export default Home;
