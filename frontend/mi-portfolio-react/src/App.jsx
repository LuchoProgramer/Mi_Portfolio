// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Technologies from './components/Technologies';
import Blogs from './components/Blogs';
import BlogDetail from './components/BlogDetail';
import Experience from './components/Experience';
import Languages from './components/Languages';
import TravelMap from './components/TravelMap';
import ToggleDarkMode from './components/ToggleDarkMode';
import Hobbies from './components/Hobbies';
import BlogForm from './components/BlogForm';

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
                    <Home />
                    <AboutMe />
                    <Technologies />
                    <Projects />
                    <Experience />
                    <Languages />
                    <Hobbies />
                    <TravelMap />
                  </div>
                }
              />
              {/* Rutas para blogs */}
              <Route path="/blog" element={<Blogs />} /> {/* Lista de blogs */}
              <Route path="/blog/:id" element={<BlogDetail />} /> {/* Detalle de blog */}
              <Route path="/create" element={<BlogForm />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;