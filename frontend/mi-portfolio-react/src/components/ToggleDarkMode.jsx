// src/components/ToggleDarkMode.jsx
import React, { useEffect, useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

function ToggleDarkMode() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Verificar preferencia almacenada o sistema
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setIsDark(storedTheme === 'dark');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDark(prefersDark);
    }
  }, []);

  useEffect(() => {
    // Actualizar la clase 'dark' en el elemento raíz
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    // Guardar la preferencia en localStorage
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? 'Activar modo claro' : 'Activar modo oscuro'}
      className="ml-4 focus:outline-none text-xl"
    >
      {isDark ? <FiSun /> : <FiMoon />}
    </button>
  );
}

export default ToggleDarkMode;

