export default function ProjectComponent(props) {
  return (
    <>
      <div className="projectComponent">
        <h3>{props.title}</h3>
        <p>{props.tags}</p>
        <p>{props.description}</p>
        <p>
          <button>Live</button>
          <button>Github</button>
        </p>
      </div>
    </>
  );
}
