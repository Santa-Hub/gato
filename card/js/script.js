document.addEventListener('DOMContentLoaded', function() {
    const card = document.querySelector('.card');

    // Agregar un evento para cuando se pase el ratón sobre la tarjeta
    card.addEventListener('mouseover', function() {
        card.style.transform = 'scale(1.1)'; // Ampliar la tarjeta
    });

    // Agregar un evento para cuando se retire el ratón de la tarjeta
    card.addEventListener('mouseout', function() {
        card.style.transform = 'scale(1)'; // Volver al tamaño original
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const card = document.querySelector('.card');
    const botonVerMas = document.querySelector('.card__button');
    const botonVolver = document.querySelector('.card__button--back');

    // Girar la tarjeta cuando se hace clic en "Ver más"
    botonVerMas.addEventListener('click', function(event) {
        event.preventDefault(); // Evita que el enlace recargue la página
        card.classList.add('flipped');
    });

    // Girar de nuevo la tarjeta cuando se hace clic en "Volver"
    botonVolver.addEventListener('click', function(event) {
        event.preventDefault(); // Evita que el enlace recargue la página
        card.classList.remove('flipped');
    });
});

document.addEventListener('mousemove', (event) => {
    const img = document.querySelector('.card__image img');
    const rect = img.getBoundingClientRect();
    const imgCenterX = rect.left + rect.width / 2;
    const imgCenterY = rect.top + rect.height / 2;

    const angle = Math.atan2(event.clientY - imgCenterY, event.clientX - imgCenterX) * (180 / Math.PI);

    img.style.transform = `rotate(${angle}deg)`;
});
