const express = require("express"); // importar o express para trabalhar com back-end
const app = express();
const door = 3333; // constante para identificar a porta para acessar o servidor

function identifyDoor()
{
    console.log("Server created successfully! Open door: ", door);
}

app.listen(door, identifyDoor);
