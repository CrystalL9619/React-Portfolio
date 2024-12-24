import "./app.scss";
import Navbar from "./components/navbar/navbar";
import AboutMe from "./components/AboutMe/AboutMe";
import Parallax from "./components/Parallax/Parallax";
import Gallery from "./components/Gallery/Gallery";
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact";
import Banner from "./components/Banner/Banner";



const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <AboutMe />
      </section>
      <section id="Parallax">
        <Parallax />
      </section>
      <section id="Gallery">
        <Gallery />
      </section>
      <section id="Project">
        <Banner type="Project" />
      </section>

      <Project id="Project" />

      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
