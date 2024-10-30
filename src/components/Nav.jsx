import { Link } from "react-scroll";
import styles from "../Nav.module.css";
import { FaSun, FaMoon } from "react-icons/fa";
import PropTypes from "prop-types";

// Accept props for isDarkMode and toggleTheme
export default function Nav({ toggleTheme, isDarkMode }) {
  return (
    <>
      <div className={styles["nav-buffer"]}></div>
      <div className={styles.nav}>
        <div className={styles.leftOfNav}></div>
        <div className={styles.navBackground}>
          {/* Toggle theme button */}
          <div
            className={styles["dark-mode"]}
            onClick={toggleTheme}
            style={{ cursor: "pointer" }}
          >
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </div>
          <ul className={styles.menu}>
            <Link to="Intro" smooth={true} duration={500}>
              ABOUT
            </Link>
            <Link to="Projects" smooth={true} duration={500}>
              PROJECTS
            </Link>
            <Link to="Contact" smooth={true} duration={500}>
              CONTACT
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}
Nav.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};
