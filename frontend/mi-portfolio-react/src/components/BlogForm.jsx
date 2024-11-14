import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const BlogForm = () => {
    const [titulo, setTitulo] = useState('');
    const [contenido, setContenido] = useState('');
    const [imagen, setImagen] = useState(null);
    const [categorias, setCategorias] = useState([]);
    const [selectedCategorias, setSelectedCategorias] = useState([]);
    const [nuevaCategoria, setNuevaCategoria] = useState(''); // Campo para nueva categoría
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [categoriesLoading, setCategoriesLoading] = useState(true);
    const navigate = useNavigate();

    const API_URL = process.env.REACT_APP_API_URL;

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get(`${API_URL}/api/categories/`);
                setCategorias(response.data);
            } catch (error) {
                console.error("Error fetching categories:", error);
                setError("Hubo un problema al cargar las categorías.");
            } finally {
                setCategoriesLoading(false);
            }
        };
        fetchCategories();
    }, [API_URL]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!titulo || !contenido) {
            setError("El título y el contenido son obligatorios.");
            return;
        }

        try {
            setLoading(true);
            let categoriaIds = [...selectedCategorias];

            // Si hay una nueva categoría, créala y añade su ID a la lista
            if (nuevaCategoria.trim()) {
                const newCategoryResponse = await axios.post(`${API_URL}/api/categories/`, {
                    nombre: nuevaCategoria
                });
                categoriaIds.push(newCategoryResponse.data.id); // Añadir nueva categoría a los IDs
            }

            const formData = new FormData();
            formData.append('titulo', titulo);
            formData.append('contenido', contenido);
            if (imagen) formData.append('imagen', imagen);
            categoriaIds.forEach(cat => formData.append('categorias', cat));

            await axios.post(`${API_URL}/api/blogs/`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            navigate('/blog'); // Redirigir después de crear
        } catch (error) {
            console.error("Error creating blog:", error);
            setError("Hubo un problema al crear el blog.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-4 mt-20">
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
                    accept="image/*"
                    onChange={(e) => setImagen(e.target.files[0])}
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700">Categorías Existentes</label>
                {categoriesLoading ? (
                    <p>Cargando categorías...</p>
                ) : (
                    <select
                        multiple
                        value={selectedCategorias}
                        onChange={(e) =>
                            setSelectedCategorias(Array.from(e.target.selectedOptions, option => option.value))
                        }
                        className="w-full p-2 border border-gray-300 rounded"
                    >
                        {Array.isArray(categorias) && categorias.length > 0 ? (
                            categorias.map(cat => (
                                <option key={cat.id} value={cat.id}>{cat.nombre}</option>
                            ))
                        ) : (
                            <option disabled>No hay categorías disponibles</option>
                        )}
                    </select>
                )}
            </div>

            <div className="mb-4">
                <label className="block text-gray-700">Crear Nueva Categoría</label>
                <input
                    type="text"
                    value={nuevaCategoria}
                    onChange={(e) => setNuevaCategoria(e.target.value)}
                    placeholder="Escribe el nombre de la nueva categoría"
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </div>

            <button
                type="submit"
                disabled={loading}
                className="bg-blue-500 text-white py-2 px-4 rounded disabled:opacity-50"
            >
                {loading ? 'Creando...' : 'Crear Blog'}
            </button>
        </form>
    );
};

export default BlogForm;

