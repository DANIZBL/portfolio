import "./about.css";

function About() {
  return (
    <section className="about" id="sobre-mi">
      <div className="about-container">
        <div className="section-heading">
          <span>05</span>

          <div>
            <p>SOBRE MÍ</p>
            <h2>Más allá del código</h2>
          </div>
        </div>

        <div className="about-content">
          <div className="about-main">
            <p className="about-highlight">
              Me interesa crear experiencias digitales que sean funcionales,
              claras y visualmente cuidadas.
            </p>

            <p>
              Mi recorrido en el desarrollo web comenzó con la curiosidad por
              entender cómo funcionan las páginas que utilizamos todos los días.
              Con el tiempo, esa curiosidad se convirtió en una forma de
              aprender, experimentar y construir mis propios proyectos.
            </p>

            <p>
              Actualmente enfoco mi aprendizaje en el desarrollo frontend,
              trabajando principalmente con JavaScript, React y TypeScript. Me
              gusta enfrentar proyectos reales porque cada uno plantea nuevos
              problemas que resolver.
            </p>
          </div>

          <div className="about-details">
            <div className="about-detail">
              <span>01</span>

              <div>
                <h3>Frontend</h3>
                <p>
                  Interfaces modernas, responsive y enfocadas en la experiencia
                  de usuario.
                </p>
              </div>
            </div>

            <div className="about-detail">
              <span>02</span>

              <div>
                <h3>Aprendizaje</h3>
                <p>
                  Busco aprender constantemente y llevar cada concepto nuevo a
                  proyectos reales.
                </p>
              </div>
            </div>

            <div className="about-detail">
              <span>03</span>

              <div>
                <h3>Resolución</h3>
                <p>
                  Me gusta investigar, probar diferentes soluciones y encontrar
                  una forma clara de resolver problemas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
