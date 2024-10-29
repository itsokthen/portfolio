import { Link } from "react-scroll";
import styles from "../Nav.module.css";

export default function Nav() {
  return (
    <>
      <div className={styles["nav-buffer"]}></div>
      <div className={styles.nav}>
        <div className={styles.leftOfNav}></div>
        <div className={styles.navBackground}>
          <div className={styles["dark-mode"]}>X</div>
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
