import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-auth.js"

import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const signupForm = document.querySelector('#signup-form');

signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;

    console.log(email, password);
    

    try {
    const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
    console.log(userCredentials);

    // Cierra el modal de registro
    const signupModal = document.querySelector('#signupModal');
    const modal = bootstrap.Modal.getInstance(signupModal);
    modal.hide();

    showMessage("Bienvenido " + userCredentials.user.email, "success");
} catch (error) {

    console.log(error.message);
    console.log(error.code);

    if (error.code === 'auth/email-already-in-use') {
        showMessage("Email en uso", "error");

    } else if (error.code === 'auth/invalid-email') {
        
        showMessage("Email Invalido", "error");
        showMessage("usuario@gamil.com", "error");

    } else if (error.code === 'auth/weak-password') {
            showMessage("Contraseña INVALIDA", "error");
        showMessage("Maximo 6 Caracteres", "error");
    } else {
        showMessage("Algo salio mal", "error");
        showMessage("Intentalo mas tarde", "error");
    }
}
});