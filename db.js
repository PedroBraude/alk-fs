const { Sequelize,Op} = require('sequelize');
const modelOperaciones = require('./Models/Operaciones.js');
require ('dotenv').config();


// Conexion URI
const sequelizeDev = new Sequelize(`postgres://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`, {
  logging: false
}); // postgres://user:password@host:port/database



modelOperaciones(
  sequelizeDev
  );

const { Operaciones } = sequelizeDev.models


module.exports = {
  Operaciones,
  db: sequelizeDev,
  Op
}