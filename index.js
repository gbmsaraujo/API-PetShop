const express = require("express");
const app = express();
const { Op } = require("sequelize");

const { Agendamento, Animal, Cuidador, Servico, Endereco } = require("./models");

app.use(express.json());

/* ---------------------------Fazendo Post (Creat) No BD -------------------------------*/




/* ---------------------------Fazendo Get(Read) No BD -------------------------------*/

app.get("/cuidadores", async (req, res) => {
  try {
    const cuidadores = await Cuidador.findAll();
    res.status(200).json(cuidadores);
  } catch (err) {
    res.status(400).json({error: true, ...err});
  }
});

app.get("/animais", async (req, res)=>{
    try{
      const animais = await Animal.findAll();
      res.status(200).json(animais);
    }
    catch(err){
      res.status(400).json({error: true, ...err})
    }
})

app.get("/enderecos", async (req, res)=>{
    try{
        const enderecos = await Endereco.findAll();
        res.status(200).json(enderecos)
    }
    catch(err){
        res.status(400).json({error: true, ...err})
    }
})

app.get("/servicos", async (req, res)=>{
    try{
        const servicos = await Servico.findAll();
        res.status(200).json(servicos)
    }
    catch(err){
        res.status(400).json({error: true, ...err})
    }
})

app.get("/agendamentos", async (req, res)=>{
    try{
        const agendamento = await Agendamento.findAll();
        res.status(200).json(agendamento)
    }
    catch(err){
        res.status(400).json({error: true, ...err})
    }
})


/* ---------------------------Fazendo Put (Update) No BD -------------------------------*/

/* ---------------------------Fazendo Delete No BD -------------------------------*/

app.listen(3000, () => {
  console.log("Aplicação Rodando!");
});
