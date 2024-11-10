import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function ProjectCard({ titulo, descripcion, enlace, enlaceGithub, tecnologias }) {
    return (
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
            {/* Título del Proyecto */}
            <h3 className="text-xl font-bold mb-2">{titulo}</h3>

            {/* Descripción del Proyecto */}
            <p className="text-gray-600 mb-4">{descripcion}</p>

            {/* Enlaces al Proyecto y al Repositorio */}
            <div className="flex items-center space-x-4 mb-4">
                {enlaceGithub && (
                    <a
                        href={enlaceGithub}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-primary transition-colors"
                        aria-label="Ver en GitHub"
                    >
                        <FaGithub size={24} />
                    </a>
                )}
                {enlace && (
                    <a
                        href={enlace}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-primary transition-colors"
                        aria-label="Ver Proyecto"
                    >
                        <FaExternalLinkAlt size={24} />
                    </a>
                )}
            </div>

            {/* Tecnologías Utilizadas */}
            <div className="flex flex-wrap gap-2">
                {tecnologias.map((tecnologia, index) => (
                    <span
                        key={index}
                        className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm"
                    >
                        {tecnologia}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default ProjectCard;
