import { showMessage } from './showMessage.js';

const facebookButton = document.querySelector('#facebookLogin');
const githubButton = document.querySelector('#githubLogin');
const appleButton = document.querySelector('#appleLogin');

// Handler para Facebook
facebookButton.addEventListener('click', async () => {
    try {
        await showMessage('Facebook Login no disponible temporalmente', 'error');
    } catch (error) {
        console.error("Error al mostrar mensaje:", error);
    }
});

// Handler para GitHub
githubButton.addEventListener('click', async () => {
    try {
        await showMessage('GitHub Login en desarrollo', 'error');
    } catch (error) {
        console.error("Error al mostrar mensaje:", error);
    }
});

// Handler para Apple
appleButton.addEventListener('click', async () => {
    try {
        await showMessage('Apple Login próximamente', 'error');
    } catch (error) {
        console.error("Error al mostrar mensaje:", error);
    }
});