import React from 'react';
import ProjectCard from './ProjectCard'; // Asegúrate de que la ruta sea correcta

const projectList = [
    {
        titulo: 'Proyecto 1',
        descripcion: 'Este es un proyecto increíble que realiza tareas fascinantes.',
        enlace: 'https://proyecto1.com',
        enlaceGithub: 'https://github.com/usuario/proyecto1',
        tecnologias: ['React', 'Tailwind CSS', 'API REST'],
        imagen: 'https://picsum.photos/seed/picsum/200/300', // Imagen de prueba
    },
    {
        titulo: 'Proyecto 2',
        descripcion: 'Este proyecto es innovador y resuelve problemas complejos.',
        enlace: 'https://proyecto2.com',
        enlaceGithub: 'https://github.com/usuario/proyecto2',
        tecnologias: ['Django', 'Python', 'Bootstrap'],
        imagen: 'https://amaiaocerin.eus/wp-content/uploads/sitio-web-artistico-proyecto-cultural.jpg', // URL de la imagen
    },
];

function Projects() {
    return (
        <section className="p-8 bg-background-light dark:bg-background-dark">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-6 text-text-primary dark:text-text-light">
                    Mis Proyectos
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {projectList.map((project, index) => (
                        <ProjectCard
                            key={index}
                            titulo={project.titulo}
                            descripcion={project.descripcion}
                            enlace={project.enlace}
                            enlaceGithub={project.enlaceGithub}
                            tecnologias={project.tecnologias}
                            imagen={project.imagen} // Pasando la imagen
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;

