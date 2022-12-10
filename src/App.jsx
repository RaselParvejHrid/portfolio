import React from "react";
import About from "./components/About";
import Intro from "./components/Intro";
import MyFooter from "./components/MyFooter";
import MyNavbar from "./components/MyNavbar";
import Skills from "./components/Skills";

const App = () => {
  return (
    <>
      <MyNavbar />
      <Intro />
      <About />
      <Skills />
      <MyFooter />
    </>
  );
};

export default App;
