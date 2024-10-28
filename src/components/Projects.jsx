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
            learned="I enjoyed refining my skills in creating reusable and efficient code. Working directly with a business owner significantly enhanced my client communication abilities and underscored the impact of proactive suggestions on project quality. This experience has also boosted my confidence in delivering user-centered designs"
            img={tagprocentral}
            liveurl="http://tagprocentral.com"
            github="https://github.com/itsokthen/tagpro_central"
          />
          <ProjectComponent
            title="tpm.gg"
            tags="C# | ASP.NET "
            description="tpm.gg is a competitive matchmaking platform designed for an online gaming community that has hosted hundreds of thousands of matches"
            contribution="I contributed to the ideation, design, and implementation of new features while assisting with debugging and performance optimization"
            learned="Working alongside a seasoned developer was a valuable learning experience. I gained insight into best practices for maintaining legacy code and balancing new feature development with system stability. This collaboration taught me how to absorb constructive feedback and refine my ideas to better align with the project vision"
            img={tagprocentral}
            liveurl="http://tagprocentral.com"
            github="https://github.com/itsokthen/tagpro_central"
          />
          <ProjectComponent
            title="TagproCentral.com"
            tags="React | API "
            description="TagproCentral is a comprehensive platform that archives scores and statistics for a competitive league, which I manage independently"
            contribution="I designed and developed the website from the ground up using React, crafting a user-friendly interface for players and fans to access game statistics and league standings"
            learned="Developing TagproCentral from scratch deepened my understanding of front-end development, particularly in React. Managing this league and website independently taught me valuable skills in project ownership, from technical troubleshooting to handling user feedback"
            img={tagprocentral}
            liveurl="http://tagprocentral.com"
            github="https://github.com/itsokthen/tagpro_central"
          />
          <ProjectComponent
            title="Ecommerce Platform"
            tags="React | TypeScript | API | Supabase"
            description="An e-commerce platform integrated with Stripe for secure payment processing, providing users with a seamless experience to view and manage their orders."
            contribution="I developed this project to strengthen my database management skills and integrate backend functionality with a dynamic front-end interface, enhancing my expertise in full-stack development"
            learned="I gained hands-on experience in connecting frontend interfaces with backend systems, specifically by integrating Stripe for secure payments and developing user account features. This project helped me refine my database management and API integration skills, and improved my ability to handle sensitive data"
            img={tagprocentral}
            liveurl="http://tagprocentral.com"
            github="https://github.com/itsokthen/tagpro_central"
          />
          <ProjectComponent
            title="GitHub Support Bot"
            tags="Python | Git | Project Management"
            description="A GitHub bot designed to automate essential tasks, streamline development workflows, and record data to assess team efficiency"
            contribution="I served as project manager, leading communication and team coordination while overseeing bot development. Additionally, I contributed to the design and implementation of the bot's core functionality to ensure it met productivity goals effectively"
            learned="This project strengthened my skills in project management, especially in coordinating effectively across team roles and ensuring alignment with project goals. I fully took over all aspects of leadership in this project by facilitating regular team meetings, setting clear expectations, and fostering open communication, which ultimately led to a collaborative and productive environment. Working on the GitHub bot also deepened my understanding of automation in development workflows, teaching me the importance of designing tools that are both adaptable and scalable"
            img={tagprocentral}
            liveurl="https://github.com/apps/probot-data-collection "
            github="https://github.com/Senior-Design-Team-19-Github-Bots"
          />
        </div>
      </div>
    </>
  );
}
