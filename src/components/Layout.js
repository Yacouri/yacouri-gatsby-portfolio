import React from "react";
import { Childs, GlobalStyle } from "../global/style";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

const Layout = ({ children }) => {
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
