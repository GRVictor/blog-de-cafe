// querySelector y querySelectorAll son las más modernas.

// querySelector \\
const heading = document.querySelector('.header__texto h2'); //querySelector retorna 0 o 1 elemento
// heading.textContent = 'Nuevo Heading'; // Cambia el texto del heading
heading.classList.add('nueva-clase'); // Agrega una nueva clase al heading
// console.log(heading);

// Es recomendable no usar id's para CSS, ya que se recomienda más usarlo para los selectores de JS.

// querySelectorAll \\

const enlaces = document.querySelectorAll('.navegacion a');
// console.log(enlaces[0]);
// enlaces[0].textContent = 'Nuevo Texto para Enlace';
// enlaces[0].href = 'http://www.google.com';
// enlaces[0].classList.add('nueva-clase');
// enlaces[0].classList.remove('navegacion__enlace');

// getElementsById no es reciente, pero se encuentra en un gran número de proyectos.

// getElementById \\

const heading2 = document.getElementById('heading');
// console.log(heading2);

// Generar un nuevo enlace
const nuevoEnlace = document.createElement('A'); // .createElement recomienda que sea en mayúsculas y sin apertura ni cierre.
// Agregar el href
nuevoEnlace.href = 'nuevo-enlace.html';
// Agregar el texto
nuevoEnlace.textContent = 'Un Nuevo Enlace';
// Agregar la clase
nuevoEnlace.classList.add('navegacion__enlace');

// Agregarlo al documento

const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace); // appendChild agrega al final del elemento.

// console.log(nuevoEnlace);

// Eventos en JS

console.log(1);

window.addEventListener('load', function () { // load espera a que el JS y los archivos que dependen del HTML estén listos.
    console.log(2);
});

window.onload = function () {
    console.log(3);
} // Es básicamente lo mismo que el anterior.

// DOMContentLoaded espera a que el HTML esté listo, pero no espera a que los archivos que dependen del HTML estén listos, usualmente se usa este.
document.addEventListener('DOMContentLoaded', function () {
    console.log(4);
});

console.log(5);

function imprimir() {
    console.log(6);
}

window.onscroll = function () {
    console.log('scrolling...');
} // Se ejecuta cada vez que se hace scroll.