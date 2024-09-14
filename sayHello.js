/* Importar a biblioteca express para trabalhar com back-end*/

const express = require("express");
const app = express();

/* Constantes: qual a porta e criar rota para servidor */

const router = express.Router();
const door = 3333;

/* Função para identificar qual a porta usada pelo server */

function identifyDoor()
{
    console.log("Server created successfully! Open door: ", door);
}

/* Função para mandar uma resposta ao servidor */

function sayHello(request, response)
{
    response.send("Hello server!");
}

/* Inicializar o servidor pela porta escolhida */

app.listen(door, identifyDoor);

/* Realizar uma requisição para o servidor */

app.use(router.get('/hello', sayHello));