const { User } = require("../db");
const { SECRET_KEY } = process.env;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Op } = require("sequelize");

const validateUser = async (username, password) => {
  try {
    let user = await User.findOne({ where: { username: username } });

    if (!user) {
      throw new Error("Invalid username/password, please try again.");
    }

    const comparePasswords = await bcrypt.compare(password, user.password);

    if (comparePasswords) {
      delete user.dataValues.password;
      const token = jwt.sign(user.dataValues, SECRET_KEY, { expiresIn: "2h" });
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
    return users;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};
const getUserProfile = async (id) => {
  try {
    const user = await User.findByPk(id, {
      attributes: { exclude: ["id", "password", "createdAt", "updatedAt"] },
    });
    if (!user) {
      throw new Error("User not found.");
    }
    delete user.dataValues.password;
    return user;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

const postUser = async (user) => {
  try {
    const {
      username,
      email,
      password,
      rol,
      name,
      lastname,
      cellphone,
      profilePicture,
    } = user;

    const existingUser = await User.findOne({
      where: { [Op.or]: [{ username }, { email }] },
    });

    if (existingUser) {
      if (existingUser.username === username) {
        throw new Error("El nombre de usuario ya está en uso.");
      } else if (existingUser.email === email) {
        throw new Error("El correo electrónico ya está en uso.");
      }
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username,
      email,
      rol,
      password: passwordHash,
      name,
      lastname,
      cellphone,
      profilePicture,
    });

    delete newUser.dataValues.password;

    const token = jwt.sign(newUser.dataValues, SECRET_KEY, { expiresIn: "2h" });

    return { token, user: newUser.dataValues };
  } catch (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
};

const putUserProfile = async (userId, updatedUserInfo) => {
  try {
    const user = await User.findByPk(userId);

    if (!user) {
      throw new Error("User not found.");
    }

    if (updatedUserInfo.password) {
      const passwordHash = await bcrypt.hash(updatedUserInfo.password, 10);
      updatedUserInfo.password = passwordHash;
    }

    await user.update(updatedUserInfo);

    const updatedUser = await User.findByPk(userId, {
      attributes: { exclude: ["password"] },
    });

    delete updatedUser.dataValues.password;
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
      throw new Error("User not found.");
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
  deleteUsers,
};
