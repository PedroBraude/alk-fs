const { Sequelize,Op} = require('sequelize');
const modelOperaciones = require('./Models/Operaciones.js');
require ('dotenv').config();
const { PG_USER, PG_PASSWORD, PG_HOST, PG_DATABASE, PG_PORT } = process.env;

let sequelize =
  process.env.NODE_ENV === "production"
    ? new Sequelize({
        database: PG_DATABASE,
        dialect: "postgres",
        host: PG_HOST,
        port: PG_PORT,
        username: PG_USER,
        password: PG_PASSWORD,
        pool: {
          max: 3,
          min: 1,
          idle: 10000,
        },
        dialectOptions: {
          ssl: {
            require: true,
            // Ref.: https://github.com/brianc/node-postgres/issues/2009
            rejectUnauthorized: false,
          },
          keepAlive: true,
        },
        ssl: true,
      })
    : new Sequelize(
        `postgres://${PG_USER}:${PG_PASSWORD}@${PG_HOST}/${PG_DATABASE}`,
        { logging: false, native: false }
      );
// Conexion URI
// const sequelizeDev = new Sequelize(`postgres://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`, {
//   logging: false
// }); // postgres://user:password@host:port/database



modelOperaciones(
  sequelize
  );

const { Operaciones } = sequelize.models


module.exports = {
  Operaciones,
  db: sequelize,
  Op
}
