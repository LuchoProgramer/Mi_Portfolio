// src/components/ProyectoCard.jsx
import React from 'react';

function ProyectoCard({ titulo, descripcion, imagen, enlace }) {
  return (
    <div className="border rounded-lg p-4 shadow-md bg-white dark:bg-gray-800 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
      {imagen && (
        <img src={imagen} alt={titulo} className="w-full h-48 object-cover rounded-md mb-4" />
      )}
      <h3 className="text-xl font-semibold text-gray-dark dark:text-white mb-2">{titulo}</h3>
      <p className="text-gray-600 dark:text-gray-300">{descripcion}</p>
      {enlace && (
        <a
          href={enlace}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-primary hover:text-primary-light font-semibold"
        >
          Ver Proyecto
        </a>
      )}
    </div>
  );
}

export default ProyectoCard;

