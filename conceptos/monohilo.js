// Pruebas con monohilo y ascinronismo.
let i = 0;

console.log("Hola Mundo");

setInterval(() => {
    console.log(i);
    i++;

    // Se forza a que el proceso falle y se detiene todo el hilo.
    if (i === 5) {
        let a = 5 + z;
    }
}, 1000);

console.log("Adios, mundo");