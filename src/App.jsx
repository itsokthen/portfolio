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
      <div id="Intro">
        <Intro />
      </div>
      <div id="Toolkit">
        <Toolkit />
      </div>
      <div id="Projects">
        <Projects />
      </div>
      <div id="Contact">
        <ContactMe />
      </div>
    </>
  );
}

export default App;
