import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="section-heading">
          <span>06</span>

          <div>
            <p>CONTACTO</p>
            <h2>Hablemos</h2>
          </div>
        </div>

        <div className="footer-content">
          <div className="footer-main">
            <h3>Daniel</h3>

            <p>
              Frontend Developer enfocado en crear experiencias web modernas,
              funcionales y cuidadas.
            </p>
          </div>

          <div className="footer-links">
            <a href="#proyectos">Proyectos</a>

            <a href="#tecnologias">Tecnologías</a>

            <a href="#recorrido">Mi recorrido</a>

            <a href="#sobre-mi">Sobre mí</a>

            <a href="#contacto">Contacto</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Daniel</span>
          <span>Frontend Developer</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
