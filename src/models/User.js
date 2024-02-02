const { DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");

module.exports = (sequelize) => {
    sequelize.define("user", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true,
        },

        username : {
            type: DataTypes.STRING,
            allowNull:false,
            unique: true,
            validate: {
                len: [6, 20], //6 a 20 caracteres
            },
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isStrongPassword(value) {
                    // Aplicar validación solo si la contraseña no ha sido establecida previamente
                    if (!this.getDataValue('password') && !/(?=.*[A-Z])(?=.*\d)/.test(value)) {
                        throw new Error('La contraseña debe contener al menos una letra mayúscula y un número.');
                    }
                },
                len: [6, 20], // longitud
            },
            set(value) {
                // Hashear la contraseña solo si es un valor nuevo o actualizado
                if (value && value !== this.getDataValue('password')) {
                    const hashedPassword = bcrypt.hashSync(value, 10);
                    this.setDataValue('password', hashedPassword);
                }
            },
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
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
    });
};