import Skills from "./Skills.jsx";

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
        <h2 className="">My Toolkit 🎯</h2>
        <div className="skills">
          <Skills text="HTML5" img={HtmlSVG} />
          <Skills text="CSS" img={CssSVG} />
          <Skills text="Javascript" img={JavascriptSVG} />
          <Skills text="React" img={ReactSVG} />
          <Skills text="Github" img={githubSVG} />
          <Skills text="Typescript" img={typescriptSVG} />
          <Skills text="Node" img={nodeSVG} />
          <Skills text="RestAPI" img={RestAPISVG} />
          <Skills text="Supabase" img={supabaseSVG} />
          <Skills text="Accessibility" img={accessibilitySVG} />
          <Skills text="Responsive" img={responsiveSVG} />
          <Skills text="AWS" img={awsSVG} />
          <Skills text=".NET" img={dotnetSVG} />
        </div>
      </div>
    </>
  );
}
