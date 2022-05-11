const { Sequelize,Op} = require('sequelize');
const modelOperaciones = require('./Models/Operaciones.js');
require ('dotenv').config();

let sequelize =
  process.env.NODE_ENV === "production"
    ? new Sequelize({
        database: process.env.PG_NAME,
        dialect: "postgres",
        host: process.env.PG_HOST,
        port: 5432,
        username: process.PG_USER,
        password: process.PG_PASSWORD,
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
        `postgres://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}/${process.env.PG_DATABASE}`,
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