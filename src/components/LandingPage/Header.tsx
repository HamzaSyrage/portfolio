import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/portfolio/projects");
  }
  return (
    <header className="header">
      <h2>
        <a
          href="https://github.com/HamzaSyrage"
          target="_blank"
          rel="My GitHub Account"
        >
          GitHub
        </a>
      </h2>
      <div className="mid-spot"></div>
      <button className="contact-btn" onClick={handleClick}>
        <span className="glow"></span>
        <span className="contact-btn-content">Projects</span>
      </button>
      <div className="spotlight">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </header>
  );
}
