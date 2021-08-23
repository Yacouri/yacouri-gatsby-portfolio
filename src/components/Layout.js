import React from "react";
import { GlobalStyle } from "../global/style";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <GlobalStyle />
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
