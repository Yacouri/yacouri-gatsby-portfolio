import React from "react";
import Navbar from "./Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      Copyright © 2021 Zouhir Yacouri. Made with Gatsby by YACOURI
    </div>
  );
};

export default Layout;
