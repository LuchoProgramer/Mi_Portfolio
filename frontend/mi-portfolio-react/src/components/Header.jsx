import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ToggleDarkMode from './ToggleDarkMode';
import { FiMenu, FiX } from 'react-icons/fi';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-primary-dark text-white p-4 fixed w-full z-20">
      <div className="container mx-auto flex justify-between items-center">
        {/* Título Estilizado como Código */}
        <h1 className="font-mono bg-gray-800 px-3 py-1 rounded text-lg flex items-center">
          {'<Luis_Viteri />'}
          <span className="ml-1 w-1 h-5 bg-white animate-pulse"></span>
        </h1>

        {/* Botón del Menú Hamburguesa */}
        <button
          onClick={toggleMenu}
          aria-label="Abrir menú"
          aria-expanded={isOpen}
          aria-controls="navigation-menu"
          className="md:hidden focus:outline-none"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Menú de Navegación */}
        <nav
          id="navigation-menu"
          className={`${
            isOpen ? 'block' : 'hidden'
          } absolute top-full left-0 w-full bg-primary-dark md:static md:block md:w-auto`}
        >
          <ul className="flex flex-col md:flex-row md:items-center md:space-x-6">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? 'text-primary-light block px-4 py-2' : 'text-white block px-4 py-2 hover:text-primary-light transition-colors'
                }
                onClick={() => setIsOpen(false)}
              >
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/proyectos"
                className={({ isActive }) =>
                  isActive ? 'text-primary-light block px-4 py-2' : 'text-white block px-4 py-2 hover:text-primary-light transition-colors'
                }
                onClick={() => setIsOpen(false)}
              >
                Proyectos
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/sobre-mi"
                className={({ isActive }) =>
                  isActive ? 'text-primary-light block px-4 py-2' : 'text-white block px-4 py-2 hover:text-primary-light transition-colors'
                }
                onClick={() => setIsOpen(false)}
              >
                Sobre mí
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contacto"
                className={({ isActive }) =>
                  isActive ? 'text-primary-light block px-4 py-2' : 'text-white block px-4 py-2 hover:text-primary-light transition-colors'
                }
                onClick={() => setIsOpen(false)}
              >
                Contacto
              </NavLink>
            </li>
            <li>
              <ToggleDarkMode />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
