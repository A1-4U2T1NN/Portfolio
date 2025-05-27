import React from "react";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Timeline from "../components/Timeline";
import Credentials from "../components/Credentials";

function Home() {
  return (
    <>
      <Navbar/>
      <Banner />
      <About />
      <Timeline />
      <Projects />
      <Skills />
      <Credentials />
      <Contact />
      <Footer />
    </>
);
}

export default Home;