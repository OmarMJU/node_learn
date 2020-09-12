// ** VARIABLES DE ENTORNO **

// Para pasar el valor a nombre en la consola escribr NOMBRE=Omar node conceptos/entorno.js
let nombre = process.env.NOMBRE || "Mauricio";
let miWeb = process.env.MI_WEB || "No tengo web :(";

console.log(`Hola ${nombre}. Mi web es ${miWeb}`);