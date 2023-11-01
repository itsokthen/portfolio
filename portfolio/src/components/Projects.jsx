import ProjectComponent from "./ProjectComponent";

export default function Projects() {
  return (
    <>
      <div className="projects wrapper">
        <h2>Some of My Projects</h2>
        <ProjectComponent
          title="TagproCentral.com"
          tags="React | API | .NET"
          description="A data archiving website for an online game similar to ESPN.com"
        />
        <ProjectComponent
          title="Ecommerce Platforms"
          tags="React | TypeScript | API | Supabase"
          description="An eccomerce website connected to Stripe to handle payments and show users their orders"
        />
      </div>
    </>
  );
}
