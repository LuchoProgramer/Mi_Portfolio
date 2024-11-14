// src/components/BlogForm.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill'; // Si decides usar Quill
import 'react-quill/dist/quill.snow.css';

const BlogForm = () => {
    const [titulo, setTitulo] = useState('');
    const [contenido, setContenido] = useState('');
    const [imagen, setImagen] = useState(null);
    const [categorias, setCategorias] = useState([]);
    const [selectedCategorias, setSelectedCategorias] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Obtener categorías del backend
        axios.get('http://localhost:8000/api/categories/')
            .then(response => setCategorias(response.data))
            .catch(error => console.error("Error fetching categories:", error));
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('titulo', titulo);
        formData.append('contenido', contenido);
        if (imagen) formData.append('imagen', imagen);
        formData.append('categorias', selectedCategorias);

        try {
            await axios.post('http://localhost:8000/api/blogs/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            navigate('/blog'); // Redirigir a la lista de blogs después de crear
        } catch (error) {
            console.error("Error creating blog:", error);
            setError("Hubo un problema al crear el blog.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Crear Nuevo Blog</h2>
            {error && <p className="text-red-500">{error}</p>}

            <div className="mb-4">
                <label className="block text-gray-700">Título</label>
                <input
                    type="text"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                    required
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700">Contenido</label>
                <ReactQuill value={contenido} onChange={setContenido} />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700">Imagen</label>
                <input
                    type="file"
                    onChange={(e) => setImagen(e.target.files[0])}
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700">Categorías</label>
                <select
                    multiple
                    value={selectedCategorias}
                    onChange={(e) =>
                        setSelectedCategorias(Array.from(e.target.selectedOptions, option => option.value))
                    }
                    className="w-full p-2 border border-gray-300 rounded"
                >
                    {categorias.map(cat => (
                        <option key={cat.id} value={cat.id}>{cat.nombre}</option>
                    ))}
                </select>
            </div>

            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
                Crear Blog
            </button>
        </form>
    );
};

export default BlogForm;
