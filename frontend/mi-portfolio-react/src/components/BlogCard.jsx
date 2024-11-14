// src/components/BlogCard.js
import React from 'react';
import { Link } from 'react-router-dom';

function BlogCard({ titulo, contenido, imagen }) {
    return (
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
            {imagen && <img src={imagen} alt={titulo} className="w-full h-48 object-cover" />}
            <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-dark dark:text-white mb-2">{titulo}</h3>
                <p className="text-gray-700 dark:text-gray-300">{contenido.substring(0, 100)}...</p>
                <Link
                    to={`/blog/${titulo}`}
                    className="text-primary dark:text-primary-light font-semibold hover:underline mt-2 inline-block"
                >
                    Leer más
                </Link>
            </div>
        </div>
    );
}

export default BlogCard;

