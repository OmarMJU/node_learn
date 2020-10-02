// Crea un buffer reservando 4 espacios vacíos en memoria, para este caso son 4.
//let buffer = Buffer.alloc(4);

// Con from se crea un buffer ya con los datos que se le pasan a este.
// let buffer = Buffer.from([1, 2, 3, 4]);
let buffer = Buffer.from("Hola");
console.log(buffer.toString());

//Abecedario.
let abc = Buffer.alloc(26);

for (let i = 0; i < 26; i++) {
    abc[i] = i + 97;
}

console.log(abc.toString());