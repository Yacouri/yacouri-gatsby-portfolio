import React from "react";
import Layout from "../components/Layout";
import { GlobalStyle } from "../global/style";
import Home from "../components/Home/Home";
import "@fontsource/noto-sans-jp";
import "@fontsource/noto-sans-jp/100.css";
import "@fontsource/noto-sans-jp/300.css";
import "@fontsource/noto-sans-jp/400.css";
import "@fontsource/noto-sans-jp/500.css";
import "@fontsource/noto-sans-jp/700.css";
// import About from "../components/About/About";
import Skills from "../components/Skills/Skills";

const IndexPage = () => {
  return (
    <Layout>
      <GlobalStyle />
      <Home />
      {/* <About /> */}
      <Skills />
    </Layout>
  );
};

export default IndexPage;
