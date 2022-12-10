import React from "react";
import About from "./components/About";
import Intro from "./components/Intro";
import MyNavbar from "./components/MyNavbar";
import Skills from "./components/Skills";

const App = () => {
  return (
    <>
      <MyNavbar />
      <Intro />
      <About />
      <Skills />
    </>
  );
};

export default App;
