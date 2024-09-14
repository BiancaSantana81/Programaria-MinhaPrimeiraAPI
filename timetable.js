/* Importar a biblioteca express  */

const express = require("express");
const app = express();

/* Criar porta e criar rota para o servidor */

const router = express.Router();
const door = 4242;

/* Função para pegar a hora local */

function timetable(request, response)
{
    const data = new Date();
    const time = data.toLocaleTimeString('pt-BR');

    response.send(time);
}

function identifyServer()
{
    console.log("Server  timetable created successfully! Open door: ", door);
}

app.listen(door, identifyServer);

app.use(router.get('/time', timetable));