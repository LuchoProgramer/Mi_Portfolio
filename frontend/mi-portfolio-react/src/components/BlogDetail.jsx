import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function BlogDetail() {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/blogs/${id}/`)
            .then(response => {
                setBlog(response.data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error al obtener el blog:', err);
                setError('No se pudo cargar el blog.');
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <p className="text-center text-lg text-primary mt-8">Cargando blog...</p>;
    }

    if (error) {
        return <p className="text-center text-red-500 mt-8">{error}</p>;
    }

    if (!blog) {
        return <p className="text-center text-gray-dark dark:text-gray-light mt-8">Blog no encontrado.</p>;
    }

    return (
        <section className="max-w-4xl mx-auto p-8">
            <h2 className="text-3xl font-bold text-gray-dark dark:text-white mb-4 text-center">
                {blog.titulo}
            </h2>
            {blog.imagen && (
                <img src={`http://localhost:8000${blog.imagen}`} alt={blog.titulo} className="w-full h-80 object-cover mb-4 rounded-lg" />
            )}
            <p className="text-gray-600 dark:text-gray-300">{blog.contenido}</p>
        </section>
    );
}

export default BlogDetail;
