import avatar from "/avatar.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
export default function Intro() {
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

  return (
    <>
      <div className="intro-container wrapper">
        <div className="intro-text">
          <h1 className="headerText">Hi! I'm Cade 🙋‍♂️</h1>
          <p>
            I am a software engineer with a passion for concrete code with
            unique solutions. I am currently incredibly excited to start my
            programming career.
          </p>
          <p>
            Outside of work, I go to the gym daily unless I am rock climbing
            with my friends. I love video games and sports and I recently picked
            up playing golf with my dad ⛳
          </p>
        </div>

        <img src={avatar} alt="avatar" className="intro-photo" />
      </div>
      <div className="down-arrow">
        <motion.div animate={arrowAnim}>
          <FontAwesomeIcon icon={faAngleDown} />
        </motion.div>
      </div>
    </>
  );
}
