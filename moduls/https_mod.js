const http = require("http");
const PORT = 3000;
const STATUS_RESPONSE = 201;
const HEADER = { "Content-Type": "text/plain" };

console.log("Escuchando en el puerto 3000");

const acctionServer = (request, response) => {
    console.log(`La solicitud es ${request.url}`);

    switch (request.url) {
        case "/hola":
            response.writeHead(STATUS_RESPONSE, HEADER);
            response.write("Hola, soy el servidor y ya recibi la solicitud");
            break;
        case "/estas":
            response.writeHead(STATUS_RESPONSE, HEADER);
            response.write("Bien y tu?");
            break;
        default:
            response.write("Erro 404: No se reconoce la solicitud");
    }

    response.end();
}

http.createServer(acctionServer).listen(PORT);
