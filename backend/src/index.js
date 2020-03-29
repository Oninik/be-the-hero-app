const express = require('express');
const cors = require('cors'); 
const routes = require('./routes');

const app = express();

app.use(cors())
app.use(express.json()); // faz o express ler o que recebe como JSON.
app.use(routes);

app.listen(3333);







/**
 * Definir Entidades e Funcionalidades do programa
 * 
 * Entidades:
 *      - ONG
 *      - Casos(incident)
 * 
 * Funcionalidades:
 *      - Login de ONG
 *      - Logout ONG
 *      - Cadastro de ONG
 *      - Cadastrar novos Casos
 *      - Deletar Casos
 *      - Listar casos especificos de uma ONG
 *      Mobile:
 *          - Listar todos os casos
 *      - Entrar em contato com a ONG
 */