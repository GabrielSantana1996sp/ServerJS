const express = require('express'); //Uso da extensão "Express"
const router = express.Router(); //Criação das rotas
const db = require('../DB/db'); //Caminho da pasta DB

// GET → listar todos os vírus ou um específico.
router.get ('/', (req,res)=>{ // começa a criar uma rota a partir do diretorio do arquivo para criar o Routes
    db.query ('SELECT * FROM Viruses',()=>{


        
    });




});

// POST → adicionar novo vírus.

//PUT → atualizar vírus existente.

//DELETE → remover vírus.