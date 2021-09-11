import React, { useEffect } from "react";
import { Childs, GlobalStyle } from "../global/style";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

const Layout = ({ children }) => {
  const currentTheme = localStorage.getItem("theme");
  useEffect(() => {
    // currentTheme ? localStorage.setItem("light") : currentTheme;
    // return console.log(currentTheme);
  }, []);
  return (
    <div>
      <GlobalStyle />
      <Navbar />
      <Childs>{children}</Childs>
      <Footer />
    </div>
  );
};

export default Layout;
