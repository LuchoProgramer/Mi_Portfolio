import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BlogCard from './BlogCard';

function Blogs() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Definir la URL base de la API usando la variable de entorno
    const API_URL = process.env.REACT_APP_API_URL;

    useEffect(() => {
        axios.get(`${API_URL}/api/blogs/`)
            .then(response => {
                console.log('Respuesta de la API:', response.data);

                if (response.data && Array.isArray(response.data)) {
                    setBlogs(response.data);
                } else if (response.data && response.data.results) {
                    setBlogs(response.data.results);
                } else {
                    setError('Datos de la API no válidos.');
                }
                setLoading(false);
            })
            .catch(err => {
                console.error('Error al obtener los blogs:', err);
                setError('Error al cargar los blogs.');
                setLoading(false);
            });
    }, [API_URL]);

    if (loading) {
        return <p className="text-center text-lg text-primary mt-8">Cargando blogs...</p>;
    }

    if (error) {
        return <p className="text-center text-red-500 mt-8">{error}</p>;
    }

    if (!blogs || blogs.length === 0) {
        return <p className="text-center text-gray-dark dark:text-gray-light mt-8">No hay blogs para mostrar.</p>;
    }

    return (
        <section className="max-w-6xl mx-auto p-8">
            <h2 className="text-3xl font-bold text-gray-dark dark:text-white mb-6 text-center">
                Mis Blogs
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {blogs.map(blog => (
                    <BlogCard
                        key={blog.id}
                        titulo={blog.titulo}
                        contenido={blog.contenido}
                        imagen={`${API_URL}${blog.imagen}`}  // Usar API_URL en lugar de BASE_URL
                    />
                ))}
            </div>
        </section>
    );
}

export default Blogs;

