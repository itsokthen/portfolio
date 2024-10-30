import { Link } from "react-scroll";
import avatar from "/newAvatar.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import styles from "../Intro.module.css";
import PropTypes from "prop-types";

export default function Intro({ isDarkMode }) {
  const arrowAnim = {
    y: [0, -10, 0],
    transition: {
      y: {
        duration: 1,
        repeat: Infinity,
        ease: "easeOut",
      },
    },
  };

  const container = {
    hidden: { x: 100, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        staggerChildren: 1,
        when: "beforeChildren",
      },
    },
  };

  return (
    <>
      <div className={`${styles["intro-container"]} wrapper`} id="Intro">
        <div className={`${styles["intro-text"]} `}>
          <h1
            className={`${styles["headerText"]} ${
              isDarkMode ? styles["dark"] : ""
            }`}
          >
            Hi! I&apos;m Cade 🙋‍♂️
          </h1>
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.p variants={container}>
              I am a software engineer with a passion for concrete code with
              unique solutions. I am currently incredibly excited to start my
              programming career.
            </motion.p>
            <motion.p variants={container}>
              Outside of work, I go to the gym daily unless I am rock climbing
              with my friends. I love video games and sports and I recently
              picked up playing golf with my dad ⛳
            </motion.p>
          </motion.div>
        </div>

        <img src={avatar} alt="avatar" className={`${styles["intro-photo"]}`} />
      </div>
      <div className={`${styles["down-arrow"]}`}>
        <Link to="Toolkit" smooth={true} duration={500}>
          <motion.div animate={arrowAnim}>
            <FontAwesomeIcon icon={faAngleDown} />
          </motion.div>
        </Link>
      </div>
    </>
  );
}
Intro.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};
