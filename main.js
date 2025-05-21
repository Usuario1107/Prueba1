
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-auth.js"
import { auth } from "./app/firebase.js";
import { loginCheck } from './app/loginChek.js';

import './app/singnupForm.js'
import './app/signinForm.js'
import './app/googlelogin.js'
import './app/otherslogin.js'

import './app/readDataBase.js'
import './app/writeDataBase.js'


import  './app/logout.js'

// Esperar a que el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    const bloqueConfiguracion = document.getElementById("bloqueConfiguracion");
    
    onAuthStateChanged(auth, (user) => {
        // Verificar si el elemento existe
        if (!bloqueConfiguracion) {
            console.error('Elemento bloqueConfiguracion no encontrado');
            return;
        }

        // Bloquear/desbloquear interfaz
        if (user) {
            // Usuario autenticado
            bloqueConfiguracion.style.pointerEvents = 'auto';
            bloqueConfiguracion.style.opacity = '1';
            bloqueConfiguracion.style.filter = 'none';
            bloqueConfiguracion.title = '';
        } else {
            // Usuario no autenticado
            bloqueConfiguracion.style.pointerEvents = 'none';
            bloqueConfiguracion.style.opacity = '0.6';
            bloqueConfiguracion.style.filter = 'grayscale(80%)';
            bloqueConfiguracion.title = 'Inicia sesión para habilitar';
        }

        loginCheck(user); // Tu función existente
    });
});
console.log('hola mundo');