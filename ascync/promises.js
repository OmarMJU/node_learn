const todoOk = nombre => console.log("Todo genial 🥰. Eres increible " + nombre);
const algoFallo = error => console.error("Algo salio mal 😩", error);

// const funcionPromesa = (cumplio, noCumplio) => {
//     if (false) {
//         cumplio("Omar");
//     } else {
//         noCumplio("La condición está en false");
//     }
// };

// const miPrimerPromesa = new Promise((resolve, reject) => {
//     if (false) {
//         resolve("Omar");
//     } else {
//         reject("La condición está en false");
//     }
// });
// miPrimerPromesa.then(todoOk);
// miPrimerPromesa.catch(algoFallo);

const miPromesa = () => {
    return new Promise((resolve, reject) => {
        if (true) resolve("Omar");
        else reject("La condición está en false");
    });
};

miPromesa()
.then(nombre => console.log("Todo genial 🥰. Eres increible " + nombre))
.catch(error => console.error("Algo salio mal 😩", error));