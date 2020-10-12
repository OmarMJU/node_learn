console.time("Programa")
function suma (a, b) {
    return a + b;
}

const num1 = 21;
const num2= 32;

console.time("Suma");
console.log("Iniciando Suma");
suma(num1, num2);
console.log("Finalizando Suma");
console.timeEnd("Suma");
console.timeEnd("Programa");