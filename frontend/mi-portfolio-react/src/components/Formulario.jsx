// src/components/Formulario.jsx
import React from 'react';
import Button from './Button';

function Formulario() {
  return (
    <form className="space-y-4">
      {/* Campos del formulario */}
      <Button type="submit">Enviar</Button>
    </form>
  );
}

export default Formulario;
