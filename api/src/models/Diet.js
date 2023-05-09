const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    'Diet',
    { 
      id: {
        type: DataTypes.UUID,                    //  UUID es muy improbable que se repitan id. 
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      createdInDb: {
        type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
      }
    },
    {
      timestamps: false,
    }
  );
};