import { Link } from "react-scroll";
import styles from "../Nav.module.css";
import { FaSun, FaMoon } from "react-icons/fa";
import PropTypes from "prop-types";

// Accept props for isDarkMode and toggleTheme
export default function Nav({ toggleTheme, isDarkMode }) {
  return (
    <nav>
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
            <li>
              <Link to="Intro" smooth={true} duration={500}>
                ABOUT
              </Link>
            </li>
            <li>
              <Link to="Projects" smooth={true} duration={500}>
                PROJECTS
              </Link>
            </li>
            <li>
              <Link to="Contact" smooth={true} duration={500}>
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
Nav.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};
