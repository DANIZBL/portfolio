import { useEffect, useState } from "react";
import "./learning-path.css";

const learningPath = [
  {
    year: "01",
    title: "Primeros pasos",
    description:
      "Comencé mi recorrido en el desarrollo web aprendiendo los fundamentos de HTML y CSS.",
    technologies: ["HTML", "CSS"],
  },
  {
    year: "02",
    title: "JavaScript",
    description:
      "Profundicé en JavaScript para aprender a crear interfaces dinámicas, manejar eventos y trabajar con datos.",
    technologies: ["JavaScript", "DOM", "APIs"],
  },
  {
    year: "03",
    title: "Desarrollo de proyectos",
    description:
      "Comencé a aplicar lo aprendido en proyectos reales, trabajando en interfaces, funcionalidades y consumo de APIs.",
    technologies: ["JavaScript", "REST API", "Git"],
  },
  {
    year: "04",
    title: "React",
    description:
      "Incorporé React para desarrollar aplicaciones más estructuradas, reutilizables y escalables.",
    technologies: ["React", "Vite", "Componentes"],
  },
  {
    year: "05",
    title: "TypeScript",
    description:
      "Comencé a trabajar con TypeScript para mejorar la organización del código y detectar errores durante el desarrollo.",
    technologies: ["TypeScript", "React"],
  },
  {
    year: "06",
    title: "Desarrollo profesional",
    description:
      "Actualmente continúo desarrollando proyectos reales, aprendiendo nuevas herramientas y mejorando constantemente mis habilidades.",
    technologies: ["React", "TypeScript", "GitHub", "IA"],
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
