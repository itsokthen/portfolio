export default function ProjectComponent(props) {
  return (
    <>
      <div className="projectComponent">
        <h3 className="projectTitle">{props.title}</h3>
        <p>{props.tags}</p>
        <p>{props.description}</p>
        <img src={props.img} alt="project" className="skill-image" />
        <p>
          <button className="button">Live</button>
          <button className="button">Github</button>
        </p>
      </div>
    </>
  );
}
