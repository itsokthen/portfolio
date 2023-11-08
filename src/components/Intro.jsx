import avatar from "/avatar.png";

export default function Intro() {
  return (
    <>
      <div className="intro-container wrapper">
        <div className="intro-text">
          <p>
            Hi! I'm Cade 🙋‍♂️ I am a software engineer with a passion for concrete
            code with unique solutions. I am currently incredibly excited to
            start my programming career.
          </p>
          <p>
            Outside of work, I go to the gym daily unless I am rock climbing
            with my friends. I love video games and sports and I recently picked
            up playing golf with my dad ⛳
          </p>
        </div>

        <img src={avatar} alt="avatar" className="intro-photo" />
      </div>
    </>
  );
}
