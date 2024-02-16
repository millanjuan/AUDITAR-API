const { User } = require('../db');
const { SECRET_KEY } = process.env;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const USERNAME_FIELD = "username";
const EMAIL_FIELD = "email";
const PASSWORD_FIELD = "password";

const validateUser = async (username, password) => {
    try {
        let user = await User.findOne({ where: { [USERNAME_FIELD]: username } });

        if (!user) {
            throw new Error("Invalid username/password, please try again.");
        }

        const comparePasswords = await bcrypt.compare(password, user.password);

        if (comparePasswords) {
            delete user.dataValues[PASSWORD_FIELD];
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
            attributes: { exclude: ["id", PASSWORD_FIELD, "createdAt", "updatedAt"] }
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
        const { username, email, password } = user;

        const passwordHash = await bcrypt.hash(password, 10);

        const newUser = await User.create({ [USERNAME_FIELD]: username, [EMAIL_FIELD]: email, [PASSWORD_FIELD]: passwordHash });
        delete newUser.dataValues[PASSWORD_FIELD];
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