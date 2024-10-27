// src/components/Contact.jsx
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
    // Aquí deberías enviar los datos al backend para procesar el correo o almacenarlo
    axios.post('http://localhost:8000/api/contacto/', formData)
      .then(response => {
        setStatus('Mensaje enviado exitosamente.');
        setFormData({ nombre: '', email: '', mensaje: '' });
      })
      .catch(error => {
        setStatus('Error al enviar el mensaje. Por favor, intenta nuevamente.');
      });
  };

  return (
    <section className="max-w-4xl mx-auto p-8">
      <h2 className="text-3xl font-semibold text-gray-dark dark:text-white mb-6">Contacto</h2>
      {status && <p className="mb-4 text-center text-green-500">{status}</p>}
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
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary-dark dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
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
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary-dark dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
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
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary-dark dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          ></textarea>
        </div>
        <button type="submit" className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-6 rounded-lg">
          Enviar
        </button>
      </form>
    </section>
  );
}

export default Contact;

