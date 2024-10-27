import PropTypes from "prop-types";
import styles from "../ProjectComponent.module.css";

export default function ProjectComponent(props) {
  return (
    <div className={styles.projectComponent}>
      <img src={props.img} alt="project" className={styles["skill-image"]} />
      <h3 className={styles.projectTitle}>{props.title}</h3>
      <p className={styles.projectTags}>{props.tags}</p>
      <p>{props.description}</p>
      <p>
        <strong>Contribution: </strong>
        {props.contribution}
      </p>
      <p>
        <strong>What I learned: </strong>
        {props.learned}
      </p>
      <div className={styles.projectLinks}>
        {props.liveurl && (
          <a href={props.liveurl} target="_blank" rel="noopener noreferrer">
            <button className="button">Live</button>
          </a>
        )}
        {props.github && (
          <a href={props.github} target="_blank" rel="noopener noreferrer">
            <button className="button">GitHub</button>
          </a>
        )}
      </div>
    </div>
  );
}

ProjectComponent.propTypes = {
  title: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  contribution: PropTypes.string.isRequired,
  learned: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  liveurl: PropTypes.string,
  github: PropTypes.string,
};
