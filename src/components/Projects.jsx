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
            description="A new venture dedicated to building a community hub for pet lovers, while also providing a supportive space for those grieving the loss of a beloved pet."
            contribution="Hired to develop this website, I collaborated closely with the owner, implementing customizations to meet his preferences and offering innovative suggestions to enhance the user experience."
            learned="This is what I learned"
            img={tagprocentral}
            liveurl="http://tagprocentral.com"
            github="https://github.com/itsokthen/tagpro_central"
          />
          <ProjectComponent
            title="tpm.gg"
            tags="C# | ASP.NET "
            description="tpm.gg is a competitive matchmaking platform designed for an online gaming community that has hosted hundreds of thousands of matches"
            contribution="I contributed to the ideation, design, and implementation of new features while assisting with debugging and performance optimization"
            img={tagprocentral}
            liveurl="http://tagprocentral.com"
            github="https://github.com/itsokthen/tagpro_central"
          />
          <ProjectComponent
            title="TagproCentral.com"
            tags="React | API "
            description="TagproCentral is a comprehensive platform that archives scores and statistics for a competitive league, which I manage independently"
            contribution="I designed and developed the website from the ground up using React, crafting a user-friendly interface for players and fans to access game statistics and league standings"
            img={tagprocentral}
            liveurl="http://tagprocentral.com"
            github="https://github.com/itsokthen/tagpro_central"
          />
          <ProjectComponent
            title="Ecommerce Platform"
            tags="React | TypeScript | API | Supabase"
            description="An e-commerce platform integrated with Stripe for secure payment processing, providing users with a seamless experience to view and manage their orders."
            contribution="I developed this project to strengthen my database management skills and integrate backend functionality with a dynamic front-end interface, enhancing my expertise in full-stack development"
            img={tagprocentral}
            liveurl="http://tagprocentral.com"
            github="https://github.com/itsokthen/tagpro_central"
          />
          <ProjectComponent
            title="GitHub Support Bot"
            tags="Python | Git | Project Management"
            description="A GitHub bot designed to automate essential tasks, streamline development workflows, and record data to assess team efficiency"
            contribution="I served as project manager, leading communication and team coordination while overseeing bot development. Additionally, I contributed to the design and implementation of the bot's core functionality to ensure it met productivity goals effectively"
            img={tagprocentral}
            liveurl="https://github.com/apps/probot-data-collection "
            github="https://github.com/Senior-Design-Team-19-Github-Bots"
          />
        </div>
      </div>
    </>
  );
}
