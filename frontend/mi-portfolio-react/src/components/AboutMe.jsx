// src/components/AboutMe.jsx
import React from 'react';
import { FiGlobe, FiBookOpen, FiCode } from 'react-icons/fi';

function AboutMe() {
  return (
    <section className="max-w-5xl mx-auto p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      {/* Título */}
      <h2 className="text-4xl font-semibold text-gray-800 dark:text-white mb-8 text-center">
        Sobre Mí
      </h2>
      <div className="flex flex-col md:flex-row items-center">
        {/* Imagen o Ilustración */}
        <img
          src="/path/to/your/photo.jpg" // Reemplaza con la ruta correcta a tu foto
          alt="Foto de Luis Viteri"
          className="w-64 h-64 rounded-full mb-6 md:mb-0 md:mr-8 object-cover shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
        />
        {/* Contenido */}
        <div className="text-gray-700 dark:text-gray-200 text-lg leading-relaxed">
          <p className="mb-4">
            ¡Hola! Soy <span className="font-bold">Luis Viteri</span>, un{' '}
            <span className="text-primary font-bold">nómada digital</span> y desarrollador web con más de{' '}
            <span className="font-bold">un año de experiencia</span> en la creación de aplicaciones dinámicas y eficientes.
          </p>
          <p className="mb-4">
            Mi pasión por el desarrollo y mi espíritu aventurero me han llevado a trabajar desde diversos lugares alrededor del mundo, combinando mi amor por la tecnología y los viajes.
          </p>
          <p className="mb-4">
            Siempre estoy en busca de nuevos desafíos y oportunidades para aprender y crecer. Creo firmemente que la adaptación y el aprendizaje continuo son clave en el mundo de la tecnología.
          </p>
          <p>
            Cuando no estoy programando, disfruto explorando nuevas culturas, aprendiendo idiomas y conectándome con personas de diferentes ámbitos.
          </p>
        </div>
      </div>
      {/* Iconos Representativos */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-around">
        <div className="flex flex-col items-center mb-6 sm:mb-0">
          <FiGlobe size={48} className="text-primary mb-2" />
          <p className="text-lg font-semibold">Nómada Digital</p>
        </div>
        <div className="flex flex-col items-center mb-6 sm:mb-0">
          <FiCode size={48} className="text-primary mb-2" />
          <p className="text-lg font-semibold">Desarrollador Web</p>
        </div>
        <div className="flex flex-col items-center">
          <FiBookOpen size={48} className="text-primary mb-2" />
          <p className="text-lg font-semibold">Aprendiz de por Vida</p>
        </div>
      </div>
      {/* Llamado a la Acción */}
      <div className="mt-8 flex justify-center">
        <a href="#contact" className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full transition-transform duration-300 ease-in-out transform hover:scale-105 shadow-lg">
          Conecta Conmigo
        </a>
      </div>
    </section>
  );
}

export default AboutMe;

