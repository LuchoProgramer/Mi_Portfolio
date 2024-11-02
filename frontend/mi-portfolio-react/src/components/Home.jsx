import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCopy, FiCheck, FiMail, FiSend } from 'react-icons/fi';
import Button from './Button';

function Home() {
  const [particleColor, setParticleColor] = useState('#6B7280');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      setParticleColor(mediaQuery.matches ? '#F3F4F6' : '#6B7280');
    };
    handleChange();
    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('luchoviteri1990@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // El mensaje desaparece después de 2 segundos
  };

  return (
    <>
      <section className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-gray-light dark:bg-gray-veryDark text-gray-dark dark:text-gray-light px-6 py-10">
        {/* Contenido Principal */}
        <div className="relative z-10 flex flex-col items-center max-w-4xl w-full mx-auto text-center">
          {/* Saludo y Título */}
          <h2 className="text-4xl font-bold mb-6">
            ¡Hola! Soy{' '}
            <span className="text-primary dark:text-primary-light">
              Luis Viteri
            </span>
          </h2>

          {/* Fila con Foto y Contacto */}
          <div className="flex flex-col md:flex-row items-center justify-center w-full mb-8">
            {/* Imagen de Perfil */}
            <img
              src="/src/img/Luis_Viteri.jpeg"
              alt="Foto de Luis Viteri"
              className="w-40 h-40 rounded-full mb-6 md:mb-0 md:mr-8 object-cover shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
            />

            {/* Información de Contacto */}
            <div className="flex flex-col items-center md:items-start">
              {/* Título con Icono */}
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <FiMail className="mr-2" size={24} />
                Email
              </h3>

              {/* Dirección de Correo y Iconos */}
              <div className="flex items-center space-x-4">
                {/* Correo Electrónico */}
                <span className="text-lg">{'luchoviteri1990@gmail.com'}</span>

                {/* Iconos de Enviar y Copiar */}
                <div className="flex items-center space-x-2">
                  {/* Icono de Enviar */}
                  <a
                    href="mailto:luchoviteri1990@gmail.com"
                    className="text-gray-dark dark:text-gray-light hover:text-primary dark:hover:text-primary-light transition-colors duration-300"
                    title="Enviar Correo"
                  >
                    <FiSend size={24} />
                  </a>

                  {/* Icono de Copiar */}
                  <button
                    onClick={handleCopyEmail}
                    className="text-gray-dark dark:text-gray-light hover:text-primary dark:hover:text-primary-light transition-colors duration-300"
                    title="Copiar Correo"
                  >
                    {copied ? <FiCheck size={24} /> : <FiCopy size={24} />}
                  </button>
                </div>
              </div>

              {/* Mensaje de confirmación */}
              {copied && (
                <div className="mt-2 text-green-500">¡Correo copiado!</div>
              )}
            </div>
          </div>

          {/* Descripción */}
          <p className="text-xl mb-8 max-w-2xl">
            Desarrollador Web apasionado por crear experiencias digitales elegantes y funcionales. Especializado en{' '}
            <span className="text-primary dark:text-primary-light">React</span> y{' '}
            <span className="text-primary dark:text-primary-light">Django</span>.
          </p>

          {/* Botones de Proyectos y CV */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            {/* Botón de Proyectos */}
            <Link to="#projects">
              <button className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full flex items-center justify-center transition-transform duration-300 ease-in-out transform hover:scale-105 shadow-lg">
                Ver Proyectos <FiArrowRight className="ml-2" size={24} />
              </button>
            </Link>

            {/* Botón de CV */}
            <a href="/path/to/CV.pdf" download="Luis_Viteri_CV.pdf">
              <Button>Descargar CV</Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;

