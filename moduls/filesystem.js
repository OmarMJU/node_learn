const fileSystem = require("fs");

const leerArchivo = (ruta, cb) => {
    fileSystem.readFile(ruta, (error, data) => {
        if (error) {
            console.error("No se pudo leer el archivo 😫", error);
        } else {
            cb(data.toString());
        }
    });
}

const escribeArchivo = (ruta, contenido) => {
    fileSystem.writeFile(ruta, contenido, error => {
        if (error){
            console.error("No se pudo escribir el archivo 😫", error);
        } else {
            console.log("Archivo creado con éxito 😎");
        }
    })
}

const borrarArchivo = (ruta, cb) => {
    fileSystem.unlink(ruta, cb);
}

leerArchivo(__dirname + "/../resources/file.txt", console.log);
escribeArchivo(__dirname + "/../resources/fileWrite.txt", "Hola, soy un archivo que fue escrito mediante NodeJS con File system");
borrarArchivo(__dirname + "/../resources/fileWrite.txt", console.log);