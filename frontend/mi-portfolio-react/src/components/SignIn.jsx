// src/components/SignIn.jsx
import React from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function SignIn() {
    const handleGoogleSignIn = async () => {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();

        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            console.log("Usuario autenticado:", user);
            alert(`¡Bienvenido, ${user.displayName}!`);
        } catch (error) {
            console.error("Error al iniciar sesión con Google:", error);
            alert("Error al iniciar sesión. Intenta nuevamente.");
        }
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Iniciar sesión</h1>
            <button
                onClick={handleGoogleSignIn}
                style={{
                    padding: "10px 20px",
                    backgroundColor: "#4285F4",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                }}
            >
                Iniciar sesión con Google
            </button>
        </div>
    );
}

export default SignIn;
