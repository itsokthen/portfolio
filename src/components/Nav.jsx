import { HashLink } from "react-router-hash-link";
import { BrowserRouter } from "react-router-dom";
import styles from "../Nav.module.css";

export default function Nav() {
  return (
    <BrowserRouter>
      <>
        <div className={styles["nav-buffer"]}></div>
        <div className={styles.nav}>
          <div className={styles.leftOfNav}></div>
          <div className={styles.navBackground}>
            <div className={styles["dark-mode"]}>X</div>
            <ul className={styles.menu}>
              <HashLink to="#Intro" smooth>
                ABOUT
              </HashLink>
              <HashLink to="#Projects" smooth>
                PROJECTS
              </HashLink>
              <HashLink to="#Contact" smooth>
                CONTACT
              </HashLink>
            </ul>
          </div>
        </div>
      </>
    </BrowserRouter>
  );
}
