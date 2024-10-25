/* Importar a biblioteca express*/

const express = require("express");
const app = express();
app.use(express.json())

/* Importar banco de dados */

const connectDataBase = require('./dataBase'); // ligando o banco de dados ao arquivo dataBase.js
connectDataBase();

const Woman = require('./womanModel');

/* Constantes: qual a porta e criar rota para servidor */

const router = express.Router();
const door = 3333;

// const cors = require('cors'); // permite consumir esta API no front-end
// app.use(cors());

const cors = require('cors');
app.use(cors({ origin: 'https://front-programaria-react-virid.vercel.app' }));


/* Função para identificar qual a porta usada pelo server */

function identifyDoor()
{
    console.log("Server created successfully! Open door: ", door);
}

/* GET: Função para mandar uma resposta ao servidor */

async function viewWomen(request, response) {
    try {
        const womanDataBase = await Woman.find();
        response.status(200).json(womanDataBase);
    } catch (erro) {
        console.error('Error fetching women:', erro);
        response.status(500).json({ error: 'An error occurred while fetching data.' });
    }
}

/* POST: Função para criar uma nova mulher com POST */

async function addWoman(request, response)
{ 
    const newWoman = new Woman ({
    name: request.body.name,
    image: request.body.image,
    quote: request.body.quote,
    minibio: request.body.minibio
    })

    try {
        const womanCreated = await newWoman.save();
        response.status(201).json(womanCreated);

    } catch(erro) {
        console.log(erro);
    }
}

/*PATCH: Função para alterar os dados de uma mulher já existente no banco de dados */

async function editWomen(request, response)
{
    try {
        const findWoman = await Woman.findById(request.params.id);
        if (request.body.name) {
            findWoman.name = request.body.name;
        }
        if (request.body.image) {
            findWoman.image = request.body.image;
        }
        if (request.body.minibio) {
            findWoman.minibio = request.body.minibio;
        }
        if (request.body.quote) {
            findWoman.quote = request.body.quote;
        }
        const updateWomanDataBase = await findWoman.save();
        response.json(updateWomanDataBase);
    } catch(erro) {
        console.log(erro);
    }
}

/* Função para deletar mulher do banco de dados */

async function deleteWomen(request, response)
{
    try {
        await Woman.findByIdAndDelete(request.params.id);
        response.json({message: 'woman successfully deleted!'});

    } catch (erro) {
        console.log(erro);
    }
}

/* Inicializar o servidor pela porta escolhida */

app.listen(door, identifyDoor);

/* Realizar uma requisição para o servidor - GET */

app.use(router.get('/women', viewWomen));

/* POST */

app.use(router.post('/women', addWoman));

/* PATH */

app.use(router.patch('/women/:id', editWomen));

/* DELETE */

app.use(router.delete('/women/:id', deleteWomen));


async function testAPI() {
    try {
        const response = await fetch('https://back-end-dhin.onrender.com/women');
        if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`);
        }
        const data = await response.json();
        console.log('Resposta da API:', data);
    } catch (error) {
        console.error('Erro ao conectar à API:', error);
    }
}

testAPI();


