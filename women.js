/* Importar a biblioteca express*/

const express = require("express");
const app = express();

/* Importar a biblioteca UUID*/

const {v4: uuidv4} = require('uuid');

/* Constantes: qual a porta e criar rota para servidor */

const router = express.Router();
const door = 3333;

/* Array de objetos */

const women = [
    {
        id: '1',
        name: 'Bianca Santana',
        image: 'https://avatars.githubusercontent.com/u/76911791?v=4',
        minibio: 'Desenvolvedora C / C++'
    },
    {
        id: '2',
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

/* GET: Função para mandar uma resposta ao servidor */

function viewWomen(request, response)
{
    response.json(women);
}

/* POST: Função para criar uma nova mulher com POST */

function addWoman(request, response)
{ 
    const newWoman = {
    id : uuidv4(),
    name: request.body.name,
    image: request.body.image,
    bio: request.body.bio
    }

    women.push(newWoman);
    response.json(women);
}


/* Inicializar o servidor pela porta escolhida */

app.listen(door, identifyDoor);

/* Realizar uma requisição para o servidor - GET */

app.get(router.get('/women', viewWomen));

/* POST */

app.use(router.post('/women', addWoman));