import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Intro from "./components/Intro";
import Toolkit from "./components/Toolkit";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import "./App.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("isDarkMode");

    if (savedTheme !== null) {
      const isDark = JSON.parse(savedTheme);
      setIsDarkMode(isDark);
      document.documentElement.classList.toggle("dark-mode", isDark);
      document.documentElement.classList.toggle("light-mode", !isDark);
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setIsDarkMode(prefersDark);
      document.documentElement.classList.toggle("dark-mode", prefersDark);
      document.documentElement.classList.toggle("light-mode", !prefersDark);
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("isDarkMode", JSON.stringify(newMode));
      document.documentElement.classList.toggle("dark-mode", newMode);
      document.documentElement.classList.toggle("light-mode", !newMode);
      return newMode;
    });
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
