import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-auth.js"

import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const signInForm = document.querySelector('#login-form');

signInForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = signInForm['login-email'].value;
    const password = signInForm['login-password'].value;

    try {
        

        const credentials = await signInWithEmailAndPassword(auth, email, password);

        // Cierra el modal de registro
        const modal = bootstrap.Modal.getInstance(document.querySelector('#signinModal'))
        modal.hide();

        showMessage("Bienvenido " + credentials.user.email, "success");
        console.log(credentials);
        
    } catch (error) {
        
        let errorMessage = "Algo salio mal";
    
    switch(error.code) {
        case 'auth/invalid-email':
            errorMessage = "Correo electrónico inválido";
            break;
        case 'auth/user-not-found':
            errorMessage = "Usuario no registrado";
            break;
        case 'auth/wrong-password':
        case 'auth/invalid-credential': // Nuevo caso
            errorMessage = "Contraseña incorrecta";
            break;
        case 'auth/too-many-requests':
            errorMessage = "Demasiados intentos. Intente más tarde";
            break;
        default:
            errorMessage = "Datos incorrestos";
    }
    
    showMessage(errorMessage, "error");
    }
});

