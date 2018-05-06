const Sequelize = require('sequelize');
const uuid = require('uuid/v4');

console.log('init sequelize');

const sequelize = new Sequelize('node-koa', 'root', 'root1234', {
  host: '127.0.0.1',
  dialect: 'mysql',
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    idle: 30000
  }
});

sequelize
  .authenticate()
  .then(() => console.log('connection has been established successfully'))
  .catch(err => console.error('unable to connect to mysql', err));

module.exports = sequelize;
