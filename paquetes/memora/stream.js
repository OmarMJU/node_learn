const fs = require("fs");
const { Stream } = require("stream");
const stream = require("stream");
const util = require("util");
let data = "";
const ENCODING = "UTF8";
let readableStream = fs.createReadStream(__dirname + "/input.txt");

readableStream.setEncoding(ENCODING);
// En un stream, los paquetes de datos que llegan o van se llaman chunks.
readableStream.on("data", chunk => {
    data += chunk;
});

// readableStream.on("end", () => console.log(data));

// Con stdout escribimos en la salida estandar del sistema.
//process.stdout.write("Hola");

// Se crea un stream de transformación que lee y escribe al mismo tiempo.
const Transform = Stream.Transform;

function Mayus() {
    Transform.call(this);
}

util.inherits(Mayus, Transform);

Mayus.prototype._transform = function(chunk, cod, cb) {
    chunkMayus = chunk.toString().toUpperCase();
    this.push(chunkMayus);
    cb();
}

let mayus = new Mayus();

readableStream.pipe(mayus).pipe(process.stdout);