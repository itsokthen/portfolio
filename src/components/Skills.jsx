import PropTypes from "prop-types";

export default function Skills(props) {
  return (
    <div className="skill-container">
      <img src={props.img} alt={props.text} className="svg" />
      <h3 className="skill-name">{props.text}</h3>
    </div>
  );
}
Skills.propTypes = {
  img: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
