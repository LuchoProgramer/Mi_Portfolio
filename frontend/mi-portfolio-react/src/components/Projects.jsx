import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProyectoCard from './ProyectCard';

function Projects() {
  const [proyectos, setProyectos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8000/api/proyectos/')
      .then(response => {
        console.log('Respuesta de la API:', response.data); // Verificar el formato de la respuesta

        // Ajustar según el formato de los datos
        if (response.data && Array.isArray(response.data)) {
          setProyectos(response.data);  // Si los datos son un arreglo
        } else if (response.data && response.data.results) {
          setProyectos(response.data.results);  // Si los datos están en "results"
        } else {
          setError('Datos de la API no válidos.');
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Error al obtener los proyectos:', err);
        setError('Error al cargar los proyectos.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center text-lg text-primary mt-8">Cargando proyectos...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500 mt-8">{error}</p>;
  }

  if (!proyectos || proyectos.length === 0) {
    return <p className="text-center text-gray-dark dark:text-gray-light mt-8">No hay proyectos para mostrar.</p>;
  }

  return (
    <section className="max-w-6xl mx-auto p-8">
      <h2 className="text-3xl font-bold text-gray-dark dark:text-white mb-6 text-center">
        Mis Proyectos
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {proyectos.map(proyecto => (
          <ProyectoCard
            key={proyecto.id}
            titulo={proyecto.titulo}
            descripcion={proyecto.descripcion}
            imagen={`http://localhost:8000${proyecto.imagen}`}
            enlace={proyecto.enlace}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;

