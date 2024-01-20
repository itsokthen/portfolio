export default function Nav() {
  return (
    <>
      <div className="nav-buffer"></div>
      <div className="nav">
        <div className="leftOfNav"></div>
        <div className="navBackground">
          <div className="dark-mode">X</div>
          <ul className="menu">
            <li>ABOUT</li>
            <li>PROJECTS</li>
            <li>CONTACT</li>
          </ul>
        </div>
      </div>
    </>
  );
}
