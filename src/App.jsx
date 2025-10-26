import React from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import SEO from './components/SEO.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Education from './sections/Education.jsx';
import Experience from './sections/Experience.jsx';
import Projects from './sections/Projects.jsx';
import Skills from './sections/Skills.jsx';
import Contact from './sections/Contact.jsx';
import Certifications from './sections/Certifications.jsx';

export default function App() {
  return (
    <div className="relative min-h-screen">
      <SEO />
      <div className="aurora" aria-hidden>
        <div className="a1"></div>
        <div className="a2"></div>
        <div className="a3"></div>
      </div>
      <Navbar />
      <main>
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="education"><Education /></section>
        <section id="experience"><Experience /></section>
        <section id="projects"><Projects /></section>
        <section id="skills"><Skills /></section>
        <section id="certifications"><Certifications /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </div>
  );
}
