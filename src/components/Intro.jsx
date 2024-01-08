import avatar from "/avatar.jpg";

export default function Intro() {
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
    </>
  );
}
