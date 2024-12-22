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
console.log("Ejercicio 4 ==>");
let relojCabecera = document.getElementById('relojDigital');
relojCabecera.innerText = devolverHora();