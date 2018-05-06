const Sequelize = require('sequelize');
const mysqlSequlize = require('../db').mysqlSequlize;

const Pet = mysqlSequlize.define('pet', {
  username: Sequelize.STRING,
  birthday: Sequelize.DATE
});

module.exports = Pet;
