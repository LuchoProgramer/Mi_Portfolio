// src/components/AboutMe.jsx
import React from 'react';

function AboutMe() {
  return (
    <section className="max-w-4xl mx-auto p-8">
      <h2 className="text-3xl font-semibold text-gray-dark dark:text-white mb-6">Sobre Mí</h2>
      <div className="flex flex-col md:flex-row items-center">
        <img src="/ruta/a/tu/foto.jpg" alt="Foto de Luis Viteri" className="w-48 h-48 rounded-full mb-6 md:mb-0 md:mr-8 object-cover" />
        <div>
          <p className="mb-4">
            Hola, soy Luis Viteri, un desarrollador web con más de 5 años de experiencia en la creación de aplicaciones dinámicas y eficientes. Me especializo en tecnologías como React, Django y Tailwind CSS para construir interfaces de usuario intuitivas y backend robustos.
          </p>
          <p className="mb-4">
            Me apasiona aprender nuevas tecnologías y mejorar continuamente mis habilidades para ofrecer soluciones innovadoras a los desafíos que enfrentan mis clientes y proyectos.
          </p>
          <p>
            Cuando no estoy programando, disfruto de la lectura, el senderismo y explorar nuevas tendencias en diseño y desarrollo web.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
