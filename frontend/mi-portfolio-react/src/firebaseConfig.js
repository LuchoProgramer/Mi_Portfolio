// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Función para crear un blog
export const createBlog = async (blogData) => {
    try {
        const docRef = await addDoc(collection(db, "blogs"), {
            ...blogData,
            createdAt: new Date()
        });
        return docRef.id;
    } catch (error) {
        console.error("Error al crear el blog: ", error);
    }
};

// Función para leer todos los blogs
export const getBlogs = async () => {
    const blogs = [];
    const querySnapshot = await getDocs(collection(db, "blogs"));
    querySnapshot.forEach((doc) => {
        blogs.push({ id: doc.id, ...doc.data() });
    });
    return blogs;
};

// Función para actualizar un blog
export const updateBlog = async (id, updatedData) => {
    try {
        const blogRef = doc(db, "blogs", id);
        await updateDoc(blogRef, updatedData);
    } catch (error) {
        console.error("Error al actualizar el blog: ", error);
    }
};

// Función para eliminar un blog
export const deleteBlog = async (id) => {
    try {
        const blogRef = doc(db, "blogs", id);
        await deleteDoc(blogRef);
    } catch (error) {
        console.error("Error al eliminar el blog: ", error);
    }
};

export { db };
