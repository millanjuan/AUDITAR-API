const { User } = require('../db');
const { SECRET_KEY } = process.env;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const validateUser = async (username, password) => {
    try {
        let user = await User.findOne({ where: { username: username } });

        if (!user) {
            throw new Error("Invalid username/password, please try again.");
        }

        const comparePasswords = await bcrypt.compare(password, user.password);

        if (comparePasswords) {
            delete user.dataValues.password;
            const token = jwt.sign(user.dataValues, SECRET_KEY, { expiresIn: '2h' });
            return { token, user: user.dataValues };
        } else {
            throw new Error("Invalid username/password, please try again.");
        }
    } catch (error) {
        console.error(error.message);
        throw error;
    }
};

const getUsers = async () => {
    try {
        const users = await User.findAll();
        return users
    } catch (error) {
        console.error(error.message);
        throw error;
    }
};
const getUserProfile = async (id) => {
    try {
        const user = await User.findByPk(id, {
            attributes: { exclude: ["id", "password", "createdAt", "updatedAt"] }
        });
        if (!user) {
            throw new Error("User not found.");
        }
        delete user.dataValues[PASSWORD_FIELD];
        return user;
    } catch (error) {
        console.error(error.message);
        throw error;
    }
};

const postUser = async (user) => {
    try {
        const { username, email, password, rol, name, lastname, cellphone, profilePicture } = user;
        if (!username || !email || !password) {
            throw new Error("El nombre de usuario, correo electrónico y contraseña son obligatorios");
        }
        
        const passwordHash = await bcrypt.hash(password, 10);

        const newUser = await User.create({ username, email, rol, password: passwordHash, 
            name, lastname, cellphone, profilePicture });
        delete newUser.dataValues.password;
        return newUser;
    } catch (error) {
        console.error(error.message);
        throw error;
    }
};

const putUserProfile = async (userId, updatedUserInfo) => {
    try {
        const user = await User.findByPk(userId);

        if (!user) {
            throw new Error('User not found.');
        }

        await user.update(updatedUserInfo);

        const updatedUser = await User.findByPk(userId, {
            attributes: { exclude: [PASSWORD_FIELD] }
        });

        delete updatedUser.dataValues[PASSWORD_FIELD];
        return updatedUser;
    } catch (error) {
        console.error(error.message);
        throw error;
    }
};

const deleteUsers = async (id) => {
    try {
        const userToDelete = await User.findByPk(id);
        if (!userToDelete) {
            throw new Error('User not found.');
        }
        const deletedUser = await userToDelete.destroy();
        return deletedUser;
    } catch (error) {
        console.error(error.message);
        throw error;
    }
};

module.exports = {
    validateUser,
    getUsers,
    getUserProfile,
    postUser,
    putUserProfile,
    deleteUsers
};