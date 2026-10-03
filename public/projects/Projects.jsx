import "./projects.css";

const projects = [
  {
    title: "Mates Paraná",
    description:
      "E-commerce desarrollado para la venta de mates y accesorios, con catálogo, carrito, proceso de compra y un editor estilo canva para realizar diseños personalizados",
    technologies: ["JavaScript", "HTML", "CSS", "API"],
    image: "/projects/mates_parana.webp",
    github: "#",
    demo: "https://matesparana.com.ar/",
  },
  {
    title: "MonaStudio",
    description:
      "E-commerce desarrollado para la venta de cosmeticos y servicios de belleza facial, con catálogo, carrito, proceso de compra.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "/projects/mona.webp",
    github: "#",
    demo: "https://mona-s.netlify.app/",
  },
  {
    title: "Sistema de Control de Cuotas",
    description:
      "Aplicación web administrativa para gestionar productos, clientes y cuotas de forma organizada.",
    technologies: ["React", "TypeScript", "CSS"],
    image: "/projects/control_cuotas.webp",
    github: "#",
    demo: "#",
  },
];

function Projects() {
  return (
    <section className="projects" id="proyectos">
      <div className="projects-container">
        <div className="section-heading">
          <div>
            <h2>Proyectos seleccionados</h2>
          </div>
        </div>

        <div className="projects-list">
          {projects.map((project, index) => (
            <article
              className={`project ${index % 2 !== 0 ? "project-reverse" : ""}`}
              key={project.title}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    GitHub ↗
                  </a>

                  <a href={project.demo} target="_blank" rel="noreferrer">
                    Ver proyecto ↗
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
