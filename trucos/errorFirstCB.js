function asyncFunction(callback) {
    setTimeout(function() {
        try {
            let result = 3 + z;  // Se forza el truene.
            callback(null, result);
        } catch (error) {
            callback(error);
        }
    }, 1000);
}

asyncFunction(function(err, data) {
    if (err) {
        console.error("Ha ocurrido un error", err);
        return false;
        // throw err; // PARA MANEJO DE ERRORES NO FUNCINA ESTA LINEA POR LA ASINCONIA.
    }

    console.log(`El resultado de la ejecucion es ${data}`);
});