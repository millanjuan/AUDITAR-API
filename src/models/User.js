const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("user", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true,
        },

        username : {
            type: DataTypes.STRING,
            allowNull:true,
            unique: true,
            validate: {
                len: [6, 20],
            },
        },

        password: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        
        rol: {
            type: DataTypes.STRING,
            defaultValue: 'client',
            validate: {
              isIn: {
                args: [['admin', 'client']],
              }
            }
          },  

        name: {
            type: DataTypes.STRING,
            allowNull:true,
        },

        lastname: {
            type: DataTypes.STRING,
            allowNull:true,
        },

        cellphone: {
            type: DataTypes.STRING,
            allowNull:true,
        },

        profilePicture: {
            type: DataTypes.STRING,
            allowNull:true,
        },
    },
    {
        paranoid: true,
    }
    );
};