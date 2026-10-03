import { useEffect, useState } from "react";
import "./learning-path.css";
import certificateImage from "../../assets/imagenes/certificado.webp";

const learningPath = [
  {
    year: "01",
    title: "Arte y Diseño",
    description:
      "Mi interés por el desarrollo Front-end comenzó mucho antes de escribir mi primera línea de código. Desde joven me apasionaron el arte y la tecnología, explorando conceptos como teoría del color, composición visual e ilustración digital.",
    technologies: [
      "Teoría del color",
      "Composición visual",
      "Ilustración digital",
      "Photoshop",
    ],
  },
  {
    year: "02",
    title: "Videojuegos y Creatividad Digital",
    description:
      "Mi pasión por los videojuegos despertó una gran curiosidad por entender cómo se construyen las experiencias digitales. El diseño de personajes, los entornos interactivos y el arte digital me acercaron cada vez más al mundo de la programación y el desarrollo de software.",
    technologies: [
      "Videojuegos",
      "Diseño digital",
      "Creatividad",
      "Arte digital",
    ],
  },
  {
    year: "03",
    title: "Primeros pasos en Programación",
    description:
      "En la Facultad de Ciencias y Tecnologías di mis primeros pasos en la lógica de programación y resolución de problemas. Allí comencé a comprender conceptos fundamentales como algoritmos, estructuras de control y pensamiento lógico, sentando las bases de mi formación como desarrollador.",
    technologies: [
      "Algoritmos",
      "Estructuras de control",
      "Lógica de programación",
    ],
  },
  {
    year: "04",
    title: "Desarrollo Web",
    description:
      "Más adelante realicé una formación específica en desarrollo web donde aprendí tecnologías como HTML, CSS, JavaScript, Sass y Gulp. Durante esta etapa desarrollé mis primeros proyectos completos y descubrí mi interés por la creación de interfaces modernas, rápidas y enfocadas en la experiencia del usuario.",
    technologies: ["HTML", "CSS", "JavaScript", "Sass", "Gulp"],
  },
  {
    year: "05",
    title: "Certificación obtenida",
    description:
      "Como parte de mi formación en desarrollo web obtuve la certificación como Desarrollador Web Front-End, consolidando los conocimientos adquiridos durante este proceso.",
    technologies: ["Desarrollador Web Front-End"],
  },
  {
    year: "06",
    title: "Aprendizaje Continuo",
    description:
      "Actualmente continúo ampliando mis conocimientos porque considero que la tecnología evoluciona constantemente y siempre existen nuevas herramientas por descubrir. Exploro tecnologías modernas, metodologías de trabajo e inteligencia artificial para optimizar procesos, mejorar mis proyectos y seguir creciendo profesionalmente como desarrollador Front-End.",
    technologies: ["React", "TypeScript", "IA", "GitHub"],
  },
];

function LearningPath() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  return (
    <>
      <section className="learning" id="recorrido">
        <div className="learning-container">
          <div className="section-heading">
            <span>04</span>

            <div>
              <p>APRENDIZAJE</p>
              <h2>Mi recorrido</h2>
            </div>
          </div>

          <div className="learning-content">
            <p>
              Mi aprendizaje en desarrollo web es un proceso continuo. Cada
              proyecto representa una nueva oportunidad para aprender,
              experimentar y mejorar.
            </p>

            <button
              className="learning-button"
              type="button"
              onClick={() => setIsOpen(true)}
            >
              <span>Ver mi recorrido</span>
              <span>↗</span>
            </button>
          </div>
        </div>
      </section>

      {isOpen && (
        <div
          className="learning-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="learning-modal-title"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setIsOpen(false);
            }
          }}
        >
          <div className="learning-modal-content">
            <div className="learning-modal-header">
              <div>
                <span>MI RECORRIDO</span>
                <h2 id="learning-modal-title">Aprendizaje y evolución</h2>
              </div>

              <button
                className="learning-close"
                type="button"
                aria-label="Cerrar recorrido"
                onClick={() => setIsOpen(false)}
              >
                ×
              </button>
            </div>

            <div className="learning-timeline">
              {learningPath.map((item) => (
                <article className="learning-item" key={item.year}>
                  <div className="learning-item-number">{item.year}</div>

                  <div className="learning-item-line">
                    <span></span>
                  </div>

                  <div className="learning-item-content">
                    <h3>{item.title}</h3>

                    <p>{item.description}</p>

                    <div className="learning-technologies">
                      {item.technologies.map((technology) => (
                        <span key={technology}>{technology}</span>
                      ))}
                    </div>

                    {item.year === "05" && (
                      <a
                        className="learning-certificate"
                        href={certificateImage}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Ver certificado en tamaño completo"
                      >
                        <img
                          src={certificateImage}
                          alt="Certificado de Desarrollador Web Front-End"
                        />
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default LearningPath;
