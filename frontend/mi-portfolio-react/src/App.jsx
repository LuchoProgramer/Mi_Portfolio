// src/App.jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {/* Sección de Inicio */}
          <section id="home" className="pt-16">
            <Home />
          </section>

          {/* Sección Sobre Mí */}
          <section id="about" className="py-20 bg-gray-100 dark:bg-gray-900">
            <AboutMe />
          </section>

          {/* Sección de Proyectos */}
          <section id="projects" className="py-20">
            <Projects />
          </section>

          {/* Sección de Contacto */}
          <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-900">
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;



