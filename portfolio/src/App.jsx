//import { useState } from 'react'
import "./App.css";
import Nav from "./components/Nav.jsx";
import Intro from "./components/Intro.jsx";
import Toolkit from "./components/Toolkit.jsx";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";

function App() {
  return (
    <>
      <Nav />
      <Intro />
      <Toolkit />
      <Projects />
      <ContactMe />
    </>
  );
}

export default App;
