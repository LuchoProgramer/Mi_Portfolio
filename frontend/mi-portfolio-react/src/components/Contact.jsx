import React, { useState } from 'react';
import axios from 'axios';

function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/contacto/', formData)
      .then(response => {
        setStatus({ message: 'Mensaje enviado exitosamente.', success: true });
        setFormData({ nombre: '', email: '', mensaje: '' });
      })
      .catch(error => {
        setStatus({ message: 'Error al enviar el mensaje. Por favor, intenta nuevamente.', success: false });
      });
  };

  return (
    <section className="max-w-4xl mx-auto p-8">
      <h2 className="text-3xl font-semibold text-gray-dark dark:text-white mb-6">Contacto</h2>
      {status && (
        <p className={`mb-4 text-center ${status.success ? 'text-green-500' : 'text-red-500'}`}>
          {status.message}
        </p>
      )}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="nombre" className="block text-sm font-medium text-gray-dark dark:text-gray-light">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary-dark transition duration-300 ease-in-out dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-dark dark:text-gray-light">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary-dark transition duration-300 ease-in-out dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          />
        </div>
        <div>
          <label htmlFor="mensaje" className="block text-sm font-medium text-gray-dark dark:text-gray-light">Mensaje</label>
          <textarea
            id="mensaje"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            required
            rows="5"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary-dark transition duration-300 ease-in-out dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-6 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105 shadow-lg"
        >
          Enviar
        </button>
      </form>
    </section>
  );
}

export default Contact;


