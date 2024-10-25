const mongoose = require('mongoose');
require('dotenv').config();

// async -> (assíncrono) para pedir que as instruções anteriores sejam atentidas primeiras
async function connectDataBase()
{
   try {
    console.log("Database connection initiated!");

    // para que o node não deixe de realizar outras operações enquanto ele entra no banco de dados
    await mongoose.connect(process.env.MONGO_URL);
    
    console.log("Database connection successful!");
   } catch(erro) {
    console.log(erro);
   }
}

module.exports = connectDataBase;