const express = require('express');
const server = express();
const cors = require('cors')
const { db,  Operaciones } = require('./db.js');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const PORT = process.env.PORT || 3000;

// process.env.PORT es una variable de entorno que se puede usar para configurar el puerto
// process.env.NODE_ENV => production or undefined
// MiddleWare
server.use(cors())
server.use(express.json());



server.use(express.static("./client/build"));//agarra todo el contenido static del build del cliente estando en la misma carpeta
server.use(cors())
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
// server.use(morgan('dev')); // ver loop en operaciones
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

server.post('/operaciones', async (req, res) => {
  const { concept, amount, date, type } = req.body;
  try {
    const nuevaOperacion = await Operaciones.create({
      concept,
      amount,
      date, 
      type,
    });
    res.json(Operaciones);
  } catch (error) {
    res.send(error);
  }
});


server.get('/operaciones', async (req, res) => {
  try {
    const { type } = req.query // MODIFICAR A PARAMS
    if (type !== 'ingreso' && type !== 'egreso') {
      let todasLasOperaciones = await Operaciones.findAll(
        {
          order: [
            ["id", "DESC"]
          ]
        });
      res.json(todasLasOperaciones)
    } else {
      let operacionesSegunTipo = await Operaciones.findAll(
        {
          where: { type: type },
          order: [
            ["id", "DESC"]
          ]
        });
      res.json(operacionesSegunTipo)
    }
  } catch (error) {
    res.send(error)
  }
});

server.delete('/operaciones/delete', async (req, res) => {
  const { id } = req.body;

  try {
    let operacionABorrar = await Operaciones.findByPk(id)
    if (!operacionABorrar) {
      res.status(400).send(`no hay operaciones con el id ${id}`)
    }
    await Operaciones.destroy({
      where: {
        id: operacionABorrar.id
      }
    })
    res.status(200).send(`La operación ${operacionABorrar.concept} ha sido eliminada.`)
  } catch (error) {
    res.send(error)
  }
})

server.put('/operaciones/update', async (req, res, next) => {
  const { id, concept, date, amount} = req.body;

  try {
      const operacionActualizada = await Operaciones.update({
        concept,
        date,
        amount,
      },
      {returning: true,where: { id: id } })
      res.status(200).send(`La operación "${id}" fue modificada`)
  } catch (error) {
      next(error)
      res.status(400).send(`La operación no pudo modificarse ${error.message}`)
  }
})

server.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
})

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  db.sync({ force: false });
});


