const { DataTypes } = require('sequelize'); // Importamos la libreria de datatypes de sequelize
// CAMBIAR A NOT NULL

// exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = sequelize => {
  sequelize.define('Operaciones', {
    concept: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM('ingreso', 'egreso'),
      allowNull: false,
    }
  }, {
    timestamps: false,
  });
}