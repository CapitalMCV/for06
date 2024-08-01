function translatePhrase() {
    const translateButton = document.querySelector('button'); // Selecciona el botón "Translate"
    const imageContainer1 = document.getElementById('imageContainer1');

    // Ocultar el botón "Translate"
    translateButton.style.display = 'none';

    // Mostrar la primera imagen con el texto
    imageContainer1.classList.remove('hidden');
}

function checkEnter(event) {
    const phrase = document.getElementById('phrase').value;
    const imageContainer1 = document.getElementById('imageContainer1');
    const finalMessageContainer = document.getElementById('mensajeFinalContainer');
    const translateButton = document.querySelector('button'); // Selecciona el botón "Translate"
    const heading = document.querySelector('h1');
    const input = document.getElementById('phrase');
    const body = document.body;
    const backgroundOverlay = document.querySelector('.background-overlay');

    if (event.key === 'Enter') {
        if (phrase.toLowerCase() === 'i love you') {
            // Añadir la clase de desvanecimiento a los elementos
            imageContainer1.classList.add('fade-out');
            heading.classList.add('fade-out');
            input.classList.add('fade-out');
            translateButton.classList.add('fade-out');

            // Esperar a que termine la animación antes de ocultarlos completamente
            setTimeout(() => {
                imageContainer1.classList.add('hidden');
                heading.classList.add('hidden');
                input.classList.add('hidden');
                translateButton.classList.add('hidden');

                // Mostrar el mensaje final y las dos imágenes
                finalMessageContainer.classList.remove('hidden');
                finalMessageContainer.classList.add('fade-in'); 

                // Añadir la clase de fondo final
                body.classList.add('final-background');
                
                // Mostrar la superposición
                backgroundOverlay.classList.remove('hidden');

                // Lanzar confeti
                launchConfetti();
            }, 200); // La duración debe coincidir con la del CSS (0.2s)
        } else {
            alert('La frase no es correcta. Inténtalo de nuevo.');
        }
    }
}

function launchConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}

// Para probar la función de confeti manualmente, puedes llamar a launchConfetti() directamente aquí:
// launchConfetti();
