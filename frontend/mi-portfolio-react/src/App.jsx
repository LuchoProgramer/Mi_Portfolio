// src/App.jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './ThemeContext';
import AppRoutes from './AppRoutes';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppRoutes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
