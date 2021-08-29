import React from "react";
import Layout from "../components/Layout";
import Home from "../components/Home/Home";
import "@fontsource/noto-sans-jp";
import "@fontsource/noto-sans-jp/100.css";
import "@fontsource/noto-sans-jp/300.css";
import "@fontsource/noto-sans-jp/400.css";
import "@fontsource/noto-sans-jp/500.css";
import "@fontsource/noto-sans-jp/700.css";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Startups from "../components/Startups/Startups";
import SharedProjects from "../components/SharedProjects/SharedProjects";
import WorkTogether from "../components/WorkTogether/WorkTogether";
import { Fade } from "react-reveal-animation";
import { author, description, media, logo } from "../global/config";
import { SEO } from "../components/SEO";

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title="Landing page"
        author={author}
        description={description}
        media={media}
        logo={logo}
      />
      <Fade>
        <Home />
        <About />
        <Skills />
        <Startups />
        <SharedProjects />
      </Fade>
      <WorkTogether />
    </Layout>
  );
};

export default IndexPage;
