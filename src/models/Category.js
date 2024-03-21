const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("category", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    statement: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    form: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
  });
};
