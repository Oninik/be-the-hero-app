const express = require ('express');
const crypto = require('crypto');
const connection = require('./database/connection'); // realiza a conexao entre o app e o banco de dados através do aquivo connection.js na pasta database

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


const routes = express.Router();


/**
 * Rota /recurso
 */


 // instalar o nodemon: 'npm install nodemon -D' a opção -D serve para instalar ele apenas como uma dependencia de Dev.
 //Nodemon serve para não precisar ficar executando o app em toda modificacao do codigo.
/**
 * Métodos HTTP:
 * 
 * GET: Buscar uma informacao do back-end
 * POST: Criar uma informacao no back-end
 * PUT: Alterar uma informacao no back-end
 * DELETE: Deletar uma informacao no back-end
 */

 /**
  * Tipos de Parâmetros:
  * 
  * Query Params: parâmetros nomeados enviados na rota após "?" (filtros, paginação) exemplo: /users?nome=Diego&idade=25
  * Route Params: parametros utilizados para identificar recursos exemplo: /users/:id
  * Request Body: Corpo da requisicao, utilizado para criar ou alterar recursos
  */


/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

 /**
  * Driver: SELECT * FROM users
  * Query Builder: table('users').select('*').where()
  */

  routes.post('/sessions', SessionController.create);

 routes.post('/ongs', OngController.create);
 routes.get('/ongs', OngController.index);

 routes.get('/profile', ProfileController.index);



 routes.post('/incidents', IncidentController.create);
 routes.get('/incidents', IncidentController.index);
 routes.delete('/incidents/:id', IncidentController.delete);


module.exports = routes;