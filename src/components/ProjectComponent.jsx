import { useState } from "react";
import PropTypes from "prop-types";
import styles from "../ProjectComponent.module.css";

export default function ProjectComponent(props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <section>
      <div
        className={`${styles.projectComponent} ${
          isExpanded ? styles.expanded : ""
        }
      ${props.isDarkMode ? styles.dark : ""}`}
      >
        <img src={props.img} alt="project" className={styles["skill-image"]} />
        <h3 className={styles.projectTitle}>{props.title}</h3>
        <p
          className={styles.projectTags}
          style={{
            color: "var(--secondary-color)",
            fontWeight: "bold",
          }}
        >
          {props.tags}
        </p>
        <div className={styles.projectTextContainer}>
          <p>{props.description}</p>
          <p>
            <strong
              style={{
                color: "var(--secondary-color)",
              }}
            >
              Contribution:{" "}
            </strong>
            {props.contribution}
          </p>
          <p>
            <strong
              style={{
                color: "var(--secondary-color)",
              }}
            >
              What I learned:{" "}
            </strong>
            {props.learned}
          </p>
        </div>
        <div
          className={`${styles.projectLinks} ${
            props.isDarkMode ? styles.dark : ""
          }`}
        >
          <div className={styles.buttonContainer}>
            <button
              onClick={toggleExpand}
              className={`${styles.expandButton} ${
                isExpanded ? styles.expanded : styles.collapsed
              }
            ${props.isDarkMode ? styles.dark : ""}`}
            >
              {isExpanded ? "▲ Less" : "▼ More"}
            </button>
          </div>
          <div className={styles.buttons}>
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
      </div>
    </section>
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
  isDarkMode: PropTypes.bool,
};
