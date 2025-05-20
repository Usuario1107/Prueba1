import { GoogleAuthProvider,signInWithPopup } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-auth.js"

import { auth } from './firebase.js';
import { showMessage } from './showMessage.js';
// Importaciones faltantes

const googleButton = document.querySelector('#googleLogin');

googleButton.addEventListener('click', async () => {
    const provider = new GoogleAuthProvider();

    try {
         const credentials = await signInWithPopup(auth, provider);

        showMessage(`Bienvenido ${credentials.user.displayName || "Usuario"}`, "success");

        // Cierra el modal correctamente
        const modal = bootstrap.Modal.getInstance(document.querySelector("#signinModal"));
        if (modal) modal.hide();

       
 
    } catch (error) {
        console.error(error);
        // Manejo de errores con mensaje genérico
        showMessage("Algo salió mal. Intente de nuevo", "error");
    }
});