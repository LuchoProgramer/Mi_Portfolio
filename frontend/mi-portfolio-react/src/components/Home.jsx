import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

function Home() {
  const [particleColor, setParticleColor] = useState('#6B7280');

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      setParticleColor(mediaQuery.matches ? '#F3F4F6' : '#6B7280');
    };
    handleChange();
    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-gray-light dark:bg-gray-veryDark text-gray-dark dark:text-gray-light">
      {/* Contenido Principal */}
      <div className="relative z-10 flex flex-col items-center">
        <img
          src="/src/img/Luis_Viteri.jpeg"
          alt="Foto de Luis Viteri"
          className="w-40 h-40 rounded-full mb-6 object-cover shadow-lg"
        />

        <h2 className="text-4xl font-bold mb-4">
          ¡Hola! Soy{' '}
          <span className="text-primary dark:text-primary-light">
            Luis Viteri
          </span>
        </h2>

        <p className="text-xl mb-8 text-center max-w-2xl">
          Desarrollador Web apasionado por crear experiencias digitales elegantes y funcionales. Especializado en{' '}
          <span className="text-primary dark:text-primary-light">React</span> y{' '}
          <span className="text-primary dark:text-primary-light">Django</span>.
        </p>

        <Link to="/proyectos">
          <button className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full flex items-center">
            Ver Proyectos <FiArrowRight className="ml-2" size={24} />
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Home;
