import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Intro from "./components/Intro";
import Toolkit from "./components/Toolkit";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import "./App.css";

function App() {
  // Step 1: Initialize state for dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Step 2: Set the class on the body based on the theme
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <>
      <Nav toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <Intro isDarkMode={isDarkMode} />
      <Toolkit />
      <Projects isDarkMode={isDarkMode} />
      <ContactMe />
    </>
  );
}

export default App;
