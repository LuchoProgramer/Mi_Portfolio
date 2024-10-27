// src/components/ProyectoCard.jsx
import React from 'react';

function ProyectoCard({ titulo, descripcion, imagen, enlace }) {
  return (
    <div className="border rounded-lg p-4 shadow-lg bg-white dark:bg-gray-800 transition-colors duration-300">
      {imagen && (
        <img src={imagen} alt={titulo} className="w-full h-48 object-cover rounded-md mb-4" />
      )}
      <h3 className="text-xl font-semibold text-gray-dark dark:text-white">{titulo}</h3>
      <p className="mt-2 text-gray-medium dark:text-gray-light">{descripcion}</p>
      {enlace && (
        <a href={enlace} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-primary hover:text-primary-light">
          Ver Proyecto
        </a>
      )}
    </div>
  );
}

export default ProyectoCard;

