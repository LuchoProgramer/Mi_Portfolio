// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
        <main className="flex-grow mt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre-mi" element={<AboutMe />} />
            <Route path="/proyectos" element={<Projects />} />
            <Route path="/contacto" element={<Contact />} />
            {/* Añade más rutas si es necesario */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

