import ProjectComponent from "./ProjectComponent";

import tagprocentral from "/tagprocentral_page.png";

export default function Projects() {
  return (
    <>
      <div className="wrapper" id="Projects">
        <h2 className="title">Things I have Worked On</h2>
        <div className="projectCards">
          <ProjectComponent
            title="BEloved.com"
            tags="Next.js | Typescript | TailwindCSS"
            description="A website I was hired to make for an upcomming business"
            img={tagprocentral}
            liveurl="http://tagprocentral.com"
            github="https://github.com/itsokthen/tagpro_central"
          />
          <ProjectComponent
            title="tpm.gg"
            tags="C# | ASP.NET "
            description="Joined an ongoing project to add innovative ideas and assist in debugging and increased performance"
            img={tagprocentral}
            liveurl="http://tagprocentral.com"
            github="https://github.com/itsokthen/tagpro_central"
          />
          <ProjectComponent
            title="TagproCentral.com"
            tags="React | API "
            description="A data archiving website for an online game similar to ESPN.com"
            img={tagprocentral}
            liveurl="http://tagprocentral.com"
            github="https://github.com/itsokthen/tagpro_central"
          />
          <ProjectComponent
            title="Ecommerce Platform"
            tags="React | TypeScript | API | Supabase"
            description="An eccomerce website connected to Stripe to handle payments and show users their orders"
            img={tagprocentral}
            liveurl="http://tagprocentral.com"
            github="https://github.com/itsokthen/tagpro_central"
          />
          <ProjectComponent
            title="GitHub Support Bot"
            tags="Python | Git | Project Management"
            description="A GitHub bot that provides a handful of useful tools to teams"
            img={tagprocentral}
            liveurl="https://github.com/apps/probot-data-collection "
            github="https://github.com/Senior-Design-Team-19-Github-Bots"
          />
        </div>
      </div>
    </>
  );
}
