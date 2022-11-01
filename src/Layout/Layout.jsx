import React from "react";
import Header from "../Header";
import Offer from "../Offer/Offer";
import { title } from "../pages/Home/Array";
import Navigation from "../Navigation/Navigation";
import { WrapperNav } from "../WrapperNav/WrapperNav";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <WrapperNav>
        {title.map((elem) => (
          <Navigation title={elem.title} to={elem.href} />
        ))}
      </WrapperNav>
      <Offer />
      <main>{children}</main>
    </>
  );
};
