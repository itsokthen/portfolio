export default function Skills(props) {
  return (
    <div className="skill-container">
      <img src={props.img} alt="skill" className="skill-image svg" />
      <h3 className="skill-name">{props.text}</h3>
    </div>
  );
}
