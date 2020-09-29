process.on("exit", () => console.log("El proceso ha finalizado"));
process.on("beforeExit", () => console.log("El proceso esta por terminar"));
process.on("uncaughtException", (error, origin) => {
    console.error("Esta es una excepcion que no se cacho");
    console.error(error, origin);
});

// Causando un error.
funcionNoDeclarada();