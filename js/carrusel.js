document.addEventListener('DOMContentLoaded', function() {
    const imagenes = [
        'img/img1.png',
        'img/img2.png',
        'img/img3.png'
    ];

    let indiceActual = 0;
    const carruselItem = document.querySelector('.carrucel-item');

    function mostrarImagen(indice) {
        carruselItem.innerHTML = `<img src="${imagenes[indice]}" alt="Imagen carrusel" class="carrusel-img-element">`;
    }

    mostrarImagen(indiceActual);

    setInterval(() => {
        indiceActual = (indiceActual + 1) % imagenes.length;
        mostrarImagen(indiceActual);
    }, 3000);
});