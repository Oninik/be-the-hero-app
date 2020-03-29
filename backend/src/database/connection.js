const knex = require('knex');
const configuration = require('../../knexfile');

const connection = knex(configuration.development);




module.exports = connection;

/**
 * O arquivo faz a conexao do app com o banco de dados, ele é chamado em outros arquivos para realizar a conexao
 * no caso o configuration.development aponta a conexao de desenvolvimento (ambiente)
 */