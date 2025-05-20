import { signOut } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-auth.js"
import { auth } from "./firebase.js"

import { showMessage } from "./showMessage.js";

const logout = document.querySelector('#logout');

logout.addEventListener('click', async () => {
    try {
        await signOut(auth);
        // Opcional: Redireccionar o mostrar mensaje de éxito
        showMessage("Secion Cerrada", "success");
        console.log("Sesión cerrada exitosamente");
    } catch (error) {
        showMessage("Error", "error");
        showMessage("No se pudo cerrar secion", "error");
        console.error("Error al cerrar sesión:", error);
        // Opcional: Mostrar mensaje de error al usuario
    }
});