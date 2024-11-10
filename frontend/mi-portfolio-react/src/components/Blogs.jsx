import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BlogCard from './BlogCard';

function Blogs() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8000/api/blogs/')
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
    }, []);

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
                        imagen={`http://localhost:8000${blog.imagen}`}
                    />
                ))}
            </div>
        </section>
    );
}

export default Blogs;
