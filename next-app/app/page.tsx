import Banner from "../components/Banner";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Timeline from "../components/Timeline";
import Credentials from "../components/Credentials";
import Contact from "../components/Contact";

export default function HomePage() {
  return (
    <div>
      <section id="Banner">
        <Banner />
      </section>
      <section id="About">
        <About />
      </section>
      <section id="Projects">
        <Projects />
      </section>
      <section id="Skills">
        <Skills />
      </section>
      <section id="Credentials">
        <Credentials />
      </section>
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
}
