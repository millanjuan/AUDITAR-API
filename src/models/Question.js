const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("question", {

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        pregunta: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          respuestas: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false,
          },
          observacion: {
            type: DataTypes.STRING,
          },
        
    });
};