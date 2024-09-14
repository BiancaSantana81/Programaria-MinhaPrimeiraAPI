/* Importar a biblioteca express para trabalhar com back-end*/

const express = require("express");
const app = express();

/* Constantes: qual a porta e criar rota para servidor */

const router = express.Router();
const door = 3333;

/* Array de objetos */

const women = [
    {
        name: 'Bianca Santana',
        image: 'https://avatars.githubusercontent.com/u/76911791?v=4',
        minibio: 'Desenvolvedora C / C++'
    },
    {
        name: 'Simara Conceição',
        image: 'https://avatars.githubusercontent.com/u/50921892?v=4',
        bio: 'Desenvolvedora e Instrutora'
    }
]

/* Função para identificar qual a porta usada pelo server */

function identifyDoor()
{
    console.log("Server created successfully! Open door: ", door);
}

/* Função para mandar uma resposta ao servidor */

function addWomen(request, response)
{
    response.json(women);
}

/* Inicializar o servidor pela porta escolhida */

app.listen(door, identifyDoor);

/* Realizar uma requisição para o servidor */

app.use(router.get('/women', addWomen));