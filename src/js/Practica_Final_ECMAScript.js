// Ejercicio 2

// TODO: Asegúrate de que los apuntes confirman esta solución. 
sessionStorage.setItem("practica", "Práctica Final ECMAScript 2025");

// Comprobar que se ha almacenado correctamente
console.log(sessionStorage.getItem("practica"));

// Ejercicio 3
const devolverHora = function () {
    const today = new Date();
    let hora = today.getHours();
    let minuto = today.getMinutes();
    let segundo = today.getSeconds();

    return `${hora}:${minuto}:${segundo}`
};

console.log("Ejercicio 3 ==> " + devolverHora());

// Ejercicio 4. Nos damos cuenta que hay que introducir un "Defer" para que el HTML se cargue antes que el JS.
// TODO: Que el reloj se actualice cada segundo.
// TODO: Reevaluar si la mejor solución es un innerText
const relojCabecera = document.getElementById('relojDigital');
relojCabecera.innerText = devolverHora();

// Ejercicio 5
// TODO: Checkear si otro método es correcto (esto añade estilo en línea, pero no modifica el documento CSS)
const titulo = document.getElementById('rotuloJugandoConMayores');

// Función que cambia el color del título al pasar el ratón
titulo.addEventListener('mouseover', () => {
    titulo.style.color = '#ffff00';  // Cambia a un color azul
});

// Función que devuelve el color original cuando el ratón sale
titulo.addEventListener('mouseout', () => {
    titulo.style.color = '';  // Vuelve al color original (negro)
});

// Ejercicio 6
let fotoCentralMain = document.getElementById('fotoCentralMain');
fotoCentralMain.addEventListener('click', function() {
    if (fotoCentralMain.src.includes('public/images/mayoresJugando01.jpg')) {
        fotoCentralMain.src = 'public/images/ImagenEjercicio6.jpg';
    } else {
        fotoCentralMain.src = 'public/images/mayoresJugando01.jpg';
    }
});