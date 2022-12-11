import React from "react";
import About from "./components/About";
import Intro from "./components/Intro";
import MessageMe from "./components/MessageMe";
import MyPortfolioNavbar from "./components/MyPortfolioNavbar";
import MyProjects from "./components/MyProjects";
import Skills from "./components/Skills";

const Portfolio = () => {
  return (
    <>
      <MyPortfolioNavbar />
      <Intro />
      <About />
      <Skills />
      <MyProjects />
      <MessageMe />
    </>
  );
};

export default Portfolio;
