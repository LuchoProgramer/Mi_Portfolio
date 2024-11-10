import React from 'react';
import { Link } from 'react-router-dom';

function BlogCard({ id, titulo, contenido, imagen }) {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
            {imagen && <img src={imagen} alt={titulo} className="w-full h-40 object-cover rounded-t-lg mb-4" />}
            <h3 className="text-xl font-semibold mb-2">
                <Link to={`/blog/${id}`}>{titulo}</Link>
            </h3>
            <p className="text-gray-600">{contenido.substring(0, 100)}...</p>
        </div>
    );
}

export default BlogCard;
