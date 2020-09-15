// Declarando varables globales (No es lo recomendable).
global.miVariable = "Omar";
console.log(miVariable);

console.log(global);
let i = 0;
const intervalo = setInterval(() => {
    console.log("Hola");

    if(i === 10) {
        console.log("No se encuentra conexión, se cierra canal.");
        clearInterval(intervalo);
    }

    i++;
}, 2000);
