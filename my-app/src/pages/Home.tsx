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
    <div style={{ backgroundColor: "#121212" }}>
      <Navbar />
      <section id="Banner"><Banner /></section>
      <section id="About"><About /></section>
      <section id="Projects"><Projects /></section>
      <section id="Skills"><Skills /></section>
      <section id="Credentials"><Credentials /></section>
      <section id="Contact"><Contact /></section>
      <Footer />
    </div>
  );
}

export default Home;
