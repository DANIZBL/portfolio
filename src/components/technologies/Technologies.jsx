import "./technologies.css";
import coverImage from "../../assets/imagenes/cover.webp";

const technologies = [
  {
    name: "HTML",
    category: "Frontend",
  },
  {
    name: "CSS",
    category: "Frontend",
  },
  {
    name: "JavaScript",
    category: "Lenguaje",
  },
  {
    name: "React",
    category: "Framework",
  },
  {
    name: "GitHub",
    category: "Herramienta",
  },
  {
    name: "ChatGPT",
    category: "IA / Desarrollo",
  },
];

function Technologies() {
  return (
    <section
      className="technologies"
      id="tecnologias"
      style={{ backgroundImage: `url(${coverImage})` }}
    >
      <div className="technologies-container">
        <div className="section-heading">
          <span>03</span>

          <div>
            <p>STACK</p>
            <h2>Tecnologías</h2>
          </div>
        </div>

        <div className="technologies-intro">
          <p>
            Herramientas y tecnologías que utilizo para transformar ideas en
            experiencias web funcionales y modernas.
          </p>
        </div>

        <div className="technologies-list">
          {technologies.map((technology, index) => (
            <article className="technology" key={technology.name}>
              <span className="technology-number">0{index + 1}</span>

              <h3>{technology.name}</h3>

              <span className="technology-category">{technology.category}</span>

              <span className="technology-arrow">↗</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Technologies;
