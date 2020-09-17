// La diferencia a entre exec y spawn es que:
// * exec permite ejecutar cualquer comando que se puede ajecutar en la terminal.
// * spawn ejecuta un nuevo proceso hijo de NodeJs.
const { exec, spawn } = require("child_process");

// exec("ls -la", (error, strout, strerror) => {
//     if (error) {
//         console.error("Ha ocurrido un error", error);
//         return false;
//     }

//     console.log(strout);
// });

const proceso = spawn("ls", ["-la"]);
console.log(proceso);
console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on("data", datos => console.log(datos.toString()));
proceso.on("exit", () => console.log("El proceso terminó"));
