const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Recipe', {
    id:{                             // id, name, summary, healthScore, createIndb
      type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    healthScore:{
      type: DataTypes.INTEGER,
        validate: {
          min: 0,
          max: 100,
        }, 
    },
    createIndb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    stepbyStep:{
      type: DataTypes.ARRAY(DataTypes.TEXT),
    },
    
  }, { timestamps: false });
};
