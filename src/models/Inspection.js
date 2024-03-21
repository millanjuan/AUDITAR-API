const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("inspection", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    companyName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    autorizationNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    fullname: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    companyAddress: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    identity: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    inspectionDate: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    inspectionTime: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    cellphone: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    form: {
      type: DataTypes.JSONB,
      allowNull: false,
      defaultValue: {},
    },

    inspectorSign1: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    inspectorSign2: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    ownerSign: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    days: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};
