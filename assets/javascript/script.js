

// Modo Oscuro

const toggleDarkModeButton = document.getElementById('toggleDarkMode');
const body = document.body;
const sunIcon = '<i class="ri-sun-line"></i>';
const moonIcon = '<i class="ri-moon-line"></i>';

// Comprobar el estado guardado del modo oscuro en el localStorage
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    toggleDarkModeButton.innerHTML = moonIcon;
}

toggleDarkModeButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Guardar el estado del modo oscuro en el localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
        toggleDarkModeButton.innerHTML = moonIcon;
    } else {
        localStorage.setItem('darkMode', 'disabled');
        toggleDarkModeButton.innerHTML = sunIcon;
    }
});

// Script simplificado para el botón de acceso
document.getElementById('accessButton').addEventListener('click', function () {
    // Aquí puedes redirigir a otra página o mostrar contenido
    alert('¡Acceso concedido! Bienvenido/a.');
    window.location.href = "xv.html"; // Descomenta para redirigir
});

// Animación de los corazones flotantes
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');

    // Posicionamos el corazón de forma aleatoria en la parte superior
    heart.style.left = `${Math.random() * 100}vw`;  // Aleatorio en el eje X
    heart.style.animationDuration = `${Math.random() * 5 + 3}s`;  // Duración aleatoria de la animación

    document.body.appendChild(heart);

    // Eliminamos el corazón después de que se haya animado
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Crear corazones de forma continua
setInterval(createHeart, 50);



