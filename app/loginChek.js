const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');

// Función para manejar la visibilidad de los elementos
export const loginCheck = (user) => {
    if (user) {
        // Usuario LOGUEADO: ocultar elementos de no-autenticados
        loggedOutLinks.forEach(link => link.style.display = 'none');
        // Mostrar elementos de autenticados
        loggedInLinks.forEach(link => link.style.display = 'block');
    } else {
        // Usuario NO logueado: mostrar elementos de no-autenticados
        loggedOutLinks.forEach(link => link.style.display = 'block');
        // Ocultar elementos de autenticados
        loggedInLinks.forEach(link => link.style.display = 'none');
    }
};