const mongoose = require('mongoose');

// async -> (assíncrono) para pedir que as instruções anteriores sejam atentidas primeiras
async function connectDataBase()
{
   try {
    console.log("Database connection initiated!");

    // para que o node não deixe de realizar outras operações enquanto ele entra no banco de dados
    await mongoose.connect('mongodb+srv://bsantana:CqREyimlsMxiWuzj@clusterwoman.mi9fl.mongodb.net/?retryWrites=true&w=majority&appName=ClusterWoman');
    
    console.log("Database connection successful!");
   } catch(erro) {
    console.log(erro);
   }
}

module.exports = connectDataBase;