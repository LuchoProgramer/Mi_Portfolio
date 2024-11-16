// src/AppRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Technologies from './components/Technologies';
import Blogs from './components/Blogs';
import BlogDetail from './components/BlogDetail';
import Experience from './components/Experience';
import Languages from './components/Languages';
import TravelMap from './components/TravelMap';
import Hobbies from './components/Hobbies';
import BlogCreatePage from './components/BlogCreatePage';
import MainLayout from './components/MainLayout';
import FirebaseTest from './components/FirebaseTest';
import SignIn from "./components/SignIn";

function AppRoutes() {
    return (
        <Routes>
            {/* Ruta principal */}
            <Route
                path="/"
                element={
                    <MainLayout>
                        <Home />
                        <AboutMe />
                        <Technologies />
                        <Projects />
                        <Experience />
                        <Languages />
                        <Hobbies />
                        <TravelMap />
                    </MainLayout>
                }
            />

            {/* Rutas de Blog */}
            <Route path="/blog" element={<MainLayout><Blogs /></MainLayout>} />
            <Route path="/blog/:id" element={<MainLayout><BlogDetail /></MainLayout>} />
            <Route path="/create" element={<MainLayout><BlogCreatePage /></MainLayout>} />
            <Route path="/test-firebase" element={<FirebaseTest />} /> {/* Ruta temporal para probar Firebase */}
            <Route path="/signin" element={<SignIn />} />
        </Routes>
    );
}

export default AppRoutes;
