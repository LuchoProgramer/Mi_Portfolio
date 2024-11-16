import React, { useState, useEffect } from "react";
import { auth, googleProvider } from "../firebaseConfig";
import { signInWithPopup } from "firebase/auth";

const SignIn = () => {
    const [user, setUser] = useState(null);

    // Detecta el usuario actual al montar el componente
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
            if (currentUser) {
                setUser({
                    displayName: currentUser.displayName,
                    email: currentUser.email,
                    photoURL: currentUser.photoURL,
                });
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, []);

    // Maneja el inicio de sesión con Google
    const handleGoogleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const loggedInUser = result.user;

            setUser({
                displayName: loggedInUser.displayName,
                email: loggedInUser.email,
                photoURL: loggedInUser.photoURL,
            });

            alert(`¡Bienvenido, ${loggedInUser.displayName}!`);
        } catch (error) {
            console.error("Error al iniciar sesión:", error);
            alert("Hubo un error al iniciar sesión. Intenta nuevamente.");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
            {!user ? (
                <>
                    <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                        Inicia sesión con Google
                    </h1>
                    <button
                        onClick={handleGoogleSignIn}
                        className="flex items-center gap-2 px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"
                    >
                        <img
                            src="/assets/logos/google-icon.svg"
                            alt="Google Logo"
                            className="w-6 h-6"
                        />
                        Iniciar sesión con Google
                    </button>
                </>
            ) : (
                <div className="text-center">
                    <img
                        src={user.photoURL}
                        alt="Foto de usuario"
                        className="w-20 h-20 rounded-full mx-auto mb-4"
                    />
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                        {user.displayName}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">{user.email}</p>
                </div>
            )}
        </div>
    );
};

export default SignIn;
