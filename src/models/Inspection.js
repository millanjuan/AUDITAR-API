const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("inspection", {

        id: {
            type: DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey: true,
        },

        companyName: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        autorizationNumber: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        fullname: {
            type: DataTypes.STRING,
            allowNull:false,
        },

        companyAdress: {
            type: DataTypes.STRING,
            allowNull:false,
        },

        identity: {
            type: DataTypes.STRING,
            allowNull:false,
        },

        inspectionDate: {
            type: DataTypes.DATE,
            allowNull:false,
        },

        inspectionTime:{
            type: DataTypes.TIME,
            allowNull:false,
        },

        cellphone: {
            type: DataTypes.STRING,
            allowNull:false,
        },

        email: {
            type: DataTypes.STRING,
            allowNull:false,
        },

       inspectorSign1: {
        type: DataTypes.STRING,
        allowNull: false,
       },

       inspectorSign2: {
        type: DataTypes.STRING,
        allowNull:true,
       },

       ownerSign: {
        type: DataTypes.STRING,
        allowNull: false,
       },
    },
    {
        paranoid: true,
    }
    );
};