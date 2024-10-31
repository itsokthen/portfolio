export default function ContactMe() {
  return (
    <footer>
      <div className="footer wrapper" id="Contact">
        <h2>Find Me Here</h2>
        <ul className="contactLinks">
          <li>
            <a
              href="https://github.com/itsokthen/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="github.svg" alt="Github" />
            </a>
          </li>
          <li>
            <a href="mailto:cades117@gmail.com">
              <img src="email.png" alt="Email" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/cade-gutscher-195629201/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="linkedin.png" alt="LinkedIn" />
            </a>
          </li>
        </ul>
      </div>
      <div className="bottomBar">Cade Gutscher 2024</div>
    </footer>
  );
}
