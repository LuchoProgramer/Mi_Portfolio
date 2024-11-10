import React from 'react';
import ProjectCard from './ProjectCard';

const projectList = [
    {
        titulo: 'Proyecto 1',
        descripcion: 'Este es un proyecto increíble que realiza tareas fascinantes.',
        enlace: 'https://proyecto1.com',
        enlaceGithub: 'https://github.com/usuario/proyecto1',
        tecnologias: ['React', 'Tailwind CSS', 'API REST'],
    },
    {
        titulo: 'Proyecto 2',
        descripcion: 'Este proyecto es innovador y resuelve problemas complejos.',
        enlace: 'https://proyecto2.com',
        enlaceGithub: 'https://github.com/usuario/proyecto2',
        tecnologias: ['Django', 'Python', 'Bootstrap'],
    },
    // Añade más proyectos aquí
];

function Projects() {
    return (
        <section className="max-w-6xl mx-auto p-8">
            <h2 className="text-3xl font-bold text-center mb-6">Mis Proyectos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {projectList.map((project, index) => (
                    <ProjectCard
                        key={index}
                        titulo={project.titulo}
                        descripcion={project.descripcion}
                        enlace={project.enlace}
                        enlaceGithub={project.enlaceGithub}
                        tecnologias={project.tecnologias}
                    />
                ))}
            </div>
        </section>
    );
}

export default Projects;
