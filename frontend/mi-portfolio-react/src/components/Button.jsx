// src/components/Button.jsx
import React from 'react';

function Button({ children, onClick, type = 'button', className = '' }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
