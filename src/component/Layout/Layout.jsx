import React from "react";
import Header from "../Header";
import { title } from "../../pages/Home/Array";
import Navigation from "../Navigation/Navigation";
import { WrapperNav } from "../WrapperNav/WrapperNav";
import Main from "../Main";
import { Footer } from "../Footer/Footer";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <WrapperNav>
        {title.map((elem) => (
          <Navigation key={elem.title} title={elem.title} to={elem.href} />
        ))}
      </WrapperNav>
      <Main>{children}</Main>
      <Footer />
    </>
  );
};
