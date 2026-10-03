import Header from "./components/header/header";
import Projects from "../public/projects/Projects";
import Technologies from "./components/technologies/Technologies";
import LearningPath from "./components/learning-path/LearningPath";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />

      <main>
        <Projects />

        <Technologies />

        <LearningPath />

        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
