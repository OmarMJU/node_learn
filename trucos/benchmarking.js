// Comienza a tomar el tiempo para todo lo que esta entre la etiqueta "Programa".
console.time("Programa");


function suma (a, b) {
    return a + b;
}

const num1 = 21;
const num2= 32;

// Conteo de tiempo para "Suma": Inicio.
console.time("Suma");
suma(num1, num2);
// Conteo de tiempo para "Suma": Fin.
console.timeEnd("Suma");


// #######################
// ### PARA CICLOS FOR ###
// #######################


console.time("Ciclo");

for (let i = 0; i < 100000000; i++) {
    suma(i, i + 1);
}
console.timeEnd("Ciclo");


// #################################
// ### PARA FUNCIONES ASINCRONAS ###
// #################################

console.time("Asincrona");

async function asyncFunction() {
    return await new Promise((resolve) => {
        setTimeout(() => {
            console.log("Dentro de la funcion asincrona")
            resolve();
        }, 2000);
    });
}

asyncFunction().then(() => {
    console.timeEnd("Asincrona");
});



// Finaliza el contador de tiempo para la etiqueta "Programa".
console.timeEnd("Programa");