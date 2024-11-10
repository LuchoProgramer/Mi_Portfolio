// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Technologies from './components/Technologies';
import Blogs from './components/Blogs';
import BlogDetail from './components/BlogDetail';
import Experience from './components/Experience';
import Languages from './components/Languages';
import TravelMap from './components/TravelMap';
import ToggleDarkMode from './components/ToggleDarkMode';

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setIsDark(storedTheme === 'dark');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDark(prefersDark);
    }
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <ToggleDarkMode isDark={isDark} toggleTheme={toggleTheme} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <div>
                <section id="home" className="pt-16">
                  <Home />
                </section>
                <section id="about" className="py-20 bg-gray-100 dark:bg-gray-900">
                  <AboutMe />
                </section>
                <section id="technologies" className="py-20">
                  <Technologies />
                </section>
                <section id="projects" className="py-20">
                  <Projects />
                </section>
                <section id="experience" className="py-20 bg-gray-100 dark:bg-gray-900">
                  <Experience />
                </section>
                <section id="languages" className="py-20 bg-gray-100">
                  <Languages />
                </section>
                <section id="travel-map" className="py-20 bg-gray-100 dark:bg-gray-900">
                  <TravelMap isDark={isDark} />
                </section>
                <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-900">
                  <Contact />
                </section>
              </div>
            } />
            <Route path="/blog" element={<Blogs />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

