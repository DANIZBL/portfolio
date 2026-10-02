import "./hedaer.css";

import coverImage from "../../assets/imagenes/cover.webp";
import profileImage from "../../assets/imagenes/profile.webp";

function Header() {
  return (
    <header className="hero">
      <div className="hero-cover">
        <img src={coverImage} alt="Portada del portfolio" />
      </div>

      <div className="hero-content">
        <div className="hero-profile">
          <img src={profileImage} alt="Foto de perfil" />
        </div>

        <div className="hero-info">
          <p className="hero-label">PORTFOLIO</p>

          <h1>Daniel</h1>

          <h2>Frontend Developer</h2>

          <p className="hero-description">
            Desarrollo interfaces web modernas, funcionales y enfocadas en
            ofrecer una buena experiencia de usuario.
          </p>

          <div className="hero-links">
            <a href="#" target="_blank" rel="noreferrer">
              LinkedIn
            </a>

            <a href="#" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <span>SCROLL</span>
        <span className="hero-scroll-line"></span>
      </div>
    </header>
  );
}

export default Header;
