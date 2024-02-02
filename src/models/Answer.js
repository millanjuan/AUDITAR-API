const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("answer", {

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        respuesta: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        observacionOk: {
            type: DataTypes.STRING,
            allowNull: false,
        },       
    });
};