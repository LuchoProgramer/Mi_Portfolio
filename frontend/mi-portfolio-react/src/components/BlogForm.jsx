import React, { useState, useEffect } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { createBlog, updateBlog } from '../firebaseConfig';
import { uploadImageToCloudinary } from '../utils/cloudinaryUtils';

const BlogForm = ({ existingBlog, onSave }) => {
    const [title, setTitle] = useState(existingBlog?.title || '');
    const [content, setContent] = useState(existingBlog?.content || '');
    const [imageUrl, setImageUrl] = useState(''); // Nuevo estado para la URL de la imagen
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (existingBlog) {
            setTitle(existingBlog.title);
            setContent(existingBlog.content);
            setImageUrl(existingBlog.image || ''); // Si el blog ya existe, carga la URL de la imagen
        }
    }, [existingBlog]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title || !content) {
            setError('Por favor, completa todos los campos.');
            return;
        }
        setIsSubmitting(true);
        setError('');
        try {
            if (existingBlog) {
                await updateBlog(existingBlog.id, { title, content, image: imageUrl }); // Usar imageUrl del estado
            } else {
                await createBlog({ title, content, image: imageUrl }); // Usar imageUrl del estado
            }
            onSave();
        } catch (err) {
            setError(`Hubo un error al guardar el blog: ${err.message}`);
        } finally {
            setIsSubmitting(false);
        }
    };

    // Adaptador personalizado para manejar la carga de imágenes
    class CloudinaryUploadAdapter {
        constructor(loader) {
            this.loader = loader;
        }

        async upload() {
            const file = await this.loader.file;
            const url = await uploadImageToCloudinary(file);
            setImageUrl(url); // Almacena la URL de la imagen en el estado imageUrl
            return { default: url };
        }

        abort() {
            // Manejo de abort si es necesario
        }
    }

    function CustomUploadAdapterPlugin(editor) {
        editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
            return new CloudinaryUploadAdapter(loader);
        };
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto p-6 bg-background-light dark:bg-background-dark rounded-lg shadow-md"
        >
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-veryDark dark:text-gray-light">
                {existingBlog ? 'Editar Blog' : 'Crear Nuevo Blog'}
            </h2>
            {error && (
                <div className="mb-4 text-red-500 text-center">
                    {error}
                </div>
            )}
            <div className="mb-4">
                <label
                    htmlFor="title"
                    className="block text-gray-veryDark dark:text-gray-light font-semibold mb-2"
                >
                    Título
                </label>
                <input
                    id="title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Título del blog"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-veryDark text-gray-veryDark dark:text-gray-light focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark"
                    required
                />
            </div>
            <div className="mb-6">
                <label
                    htmlFor="content"
                    className="block text-gray-veryDark dark:text-gray-light font-semibold mb-2"
                >
                    Contenido
                </label>
                <CKEditor
                    editor={ClassicEditor}
                    data={content}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        setContent(data);
                    }}
                    config={{
                        extraPlugins: [CustomUploadAdapterPlugin],
                        toolbar: [
                            'heading',
                            '|',
                            'bold',
                            'italic',
                            'link',
                            'bulletedList',
                            'numberedList',
                            'blockQuote',
                            '|',
                            'imageUpload',
                            'insertTable',
                            'mediaEmbed',
                            '|',
                            'undo',
                            'redo'
                        ],
                    }}
                />
            </div>
            <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-2 px-4 bg-primary-dark dark:bg-primary-light text-white font-semibold rounded-md transition-colors duration-200 ${isSubmitting
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:bg-primary-light dark:hover:bg-primary-dark'
                    }`}
            >
                {isSubmitting ? 'Guardando...' : existingBlog ? 'Actualizar Blog' : 'Crear Blog'}
            </button>
        </form>
    );
};

export default BlogForm;