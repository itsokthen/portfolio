import Skills from "./Skills.jsx";

export default function Toolkit() {
  return (
    <>
      <div className="toolkit wrapper">
        <h2 className="">My Toolkit 🎯</h2>
        <div className="skills">
          <Skills text="HTML5" />
          <Skills text="CSS" />
          <Skills text="Javascript" />
          <Skills text="React" />
          <Skills text="Github" />
          <Skills text="Typescript" />
          <Skills text="Node" />
          <Skills text="RestAPI" />
          <Skills text="Supabase" />
          <Skills text="Accessibility" />
          <Skills text="Responsive" />
          <Skills text="AWS" />
        </div>
      </div>
    </>
  );
}
