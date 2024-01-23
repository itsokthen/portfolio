import Skills from "./Skills.jsx";
import { Reveal } from "./Reveal.tsx";
import { motion, useInView, useAnimation } from "framer-motion";

// SVG imports
import ReactSVG from "/react-2.svg";
import RestAPISVG from "/rest-api-icon.svg";
import HtmlSVG from "/html5.svg";
import CssSVG from "/css3.svg";
import JavascriptSVG from "/javascript.svg";
import githubSVG from "/github.svg";
import typescriptSVG from "/typescript.svg";
import nodeSVG from "/node.svg";
import supabaseSVG from "/supabase.svg";
import accessibilitySVG from "/accessibility.svg";
import responsiveSVG from "/responsive.svg";
import awsSVG from "/aws.svg";
import dotnetSVG from "/dotnet.svg";

export default function Toolkit() {
  return (
    <>
      <div className="toolkit wrapper">
        <h2 className="title">My Toolkit 🎯</h2>
        <div className="skills">
          <Reveal>
            <Skills text="HTML5" img={HtmlSVG} />
          </Reveal>
          <Reveal>
            <Skills text="CSS" img={CssSVG} />
          </Reveal>
          <Reveal>
            <Skills text="Javascript" img={JavascriptSVG} />
          </Reveal>
          <Reveal>
            <Skills text="React" img={ReactSVG} />
          </Reveal>
          <Reveal>
            <Skills text="Github" img={githubSVG} />
          </Reveal>
          <Reveal>
            <Skills text="Typescript" img={typescriptSVG} />
          </Reveal>
          <Reveal>
            <Skills text="Node" img={nodeSVG} />
          </Reveal>
          <Reveal>
            <Skills text="RestAPI" img={RestAPISVG} />
          </Reveal>
          <Reveal>
            <Skills text="Supabase" img={supabaseSVG} />
          </Reveal>
          <Reveal>
            <Skills text="Accessibility" img={accessibilitySVG} />
          </Reveal>
          <Reveal>
            <Skills text="Responsive" img={responsiveSVG} />
          </Reveal>
          <Reveal>
            <Skills text="AWS" img={awsSVG} />
          </Reveal>
          <Reveal>
            <Skills text="NextJS" />
          </Reveal>

          {/* <Skills text=".NET" img={dotnetSVG} /> */}
        </div>
      </div>
    </>
  );
}
