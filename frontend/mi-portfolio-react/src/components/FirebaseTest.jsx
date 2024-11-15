// src/components/FirebaseTest.jsx
import React, { useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../firebaseConfig';

const FirebaseTest = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "blogs"));
                const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setBlogs(data);
                console.log("Firebase está conectado correctamente", data);
            } catch (error) {
                console.error("Error al conectar con Firebase: ", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2>Prueba de Conexión a Firebase</h2>
            {blogs.length > 0 ? (
                blogs.map((blog) => (
                    <div key={blog.id}>
                        <h3>{blog.title}</h3>
                        <p>{blog.content}</p>
                    </div>
                ))
            ) : (
                <p>No se encontraron blogs o la conexión a Firebase falló.</p>
            )}
        </div>
    );
};

export default FirebaseTest;
