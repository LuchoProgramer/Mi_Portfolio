// src/components/MainLayout.jsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ToggleDarkMode from './ToggleDarkMode';

function MainLayout({ children }) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <ToggleDarkMode />
            <main className="flex-grow">{children}</main>
            <Footer />
        </div>
    );
}

export default MainLayout;
