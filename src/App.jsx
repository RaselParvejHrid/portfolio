import React from "react";
import About from "./components/About";
import Intro from "./components/Intro";
import MessageMe from "./components/MessageMe";
import MyFooter from "./components/MyFooter";
import MyNavbar from "./components/MyNavbar";
import MyProjects from "./components/MyProjects";
import Skills from "./components/Skills";

const App = () => {
  return (
    <>
      <MyNavbar />
      <Intro />
      <About />
      <Skills />
      <MyProjects />
      <MessageMe />
      <MyFooter />
    </>
  );
};

export default App;
