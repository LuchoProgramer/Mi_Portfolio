// src/components/BlogCreatePage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import BlogForm from './BlogForm';

const BlogCreatePage = () => {
    const navigate = useNavigate();

    const handleSave = () => {
        // Redirige a la página de blogs después de guardar
        navigate('/blog');
    };

    return (
        <div>
            <h2>Crear Nuevo Blog</h2>
            <BlogForm onSave={handleSave} />
        </div>
    );
};

export default BlogCreatePage;
