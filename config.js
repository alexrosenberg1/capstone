const Sequelize = require('sequelize');

let database = 'cargo';
let username = 'root';
let password = 'Lovesosa2!';


const config = new Sequelize(database, username, password, {dialect: 'mariadb'});

module.exports = config;


