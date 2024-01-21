import ProjectComponent from "./ProjectComponent";

import tagprocentral from "/tagprocentral_page.png";

export default function Projects() {
  return (
    <>
      <div className="projects wrapper">
        <h2>Some of My Projects</h2>
        <ProjectComponent
          title="TagproCentral.com"
          tags="React | API | .NET"
          description="A data archiving website for an online game similar to ESPN.com"
          img={tagprocentral}
        />
        <ProjectComponent
          title="Ecommerce Platform"
          tags="React | TypeScript | API | Supabase"
          description="An eccomerce website connected to Stripe to handle payments and show users their orders"
          img={tagprocentral}
        />
        <ProjectComponent
          title="GitHub Support Bot"
          tags="Python | Git | Project Manager"
          description="A GitHub bot that provides a handful of useful tools to teams"
          img={tagprocentral}
        />
      </div>
    </>
  );
}
