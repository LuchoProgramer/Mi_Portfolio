// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './ThemeContext'; // Importa el ThemeProvider
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
  return (
    <ThemeProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <ToggleDarkMode />
          <main className="flex-grow">
            <Routes>
              <Route
                path="/"
                element={
                  <div>
                    {/* Elimina las etiquetas <section> que envuelven a los componentes si estos ya tienen sus propias etiquetas */}
                    <Home />
                    <AboutMe />
                    <Technologies />
                    <Projects />
                    <Experience />
                    <Languages />
                    <TravelMap />
                    <Contact />
                  </div>
                }
              />
              <Route path="/blog" element={<Blogs />} />
              <Route path="/blog/:id" element={<BlogDetail />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;


