const { User } = require("../db");
const { SECRET_KEY } = process.env;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const validateUser = async (username, password) => {
  try {
    let user = await User.findOne({ where: { username: username } });

    if (!user) {
      throw new Error("Invalid username/password, please try again.");
    }

    const comparePasswords = await bcrypt.compare(password, user.password);

    if (comparePasswords) {
      delete user.dataValues.password;
      const expiresIn = 8 * 60 * 60; // 8 horas en segundos
      const token = jwt.sign(user.dataValues, SECRET_KEY, { expiresIn });
      const expirationTime = new Date(Date.now() + expiresIn * 1000); // Fecha de expiración
      return { token, expirationTime, user: user.dataValues };
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
    const users = await User.findAll({
      attributes: { exclude: ["password", "profilePicture"] },
    });
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

const postUserBasic = async ({ email, rol }) => {
  const existingUser = await User.findOne({ where: { email } });
  if (existingUser) {
    throw new Error("El correo electrónico ya está en uso.");
  }

  const newUser = await User.create({
    email,
    username: null,
    password: null,
    rol: rol,
    name: null,
    lastname: null,
    cellphone: null,
    profilePicture: null,
  });

  return newUser;
};

const putUserRegisterInformation = async (userInfo) => {
  try {
    const user = await User.findOne({
      where: {
        email: userInfo.email, // Aquí especifica el correo electrónico que deseas buscar
      },
    });

    if (!user) {
      throw new Error("User not found.");
    }

    if (userInfo.password) {
      const passwordHash = await bcrypt.hash(userInfo.password, 10);
      userInfo.password = passwordHash;
    }

    await user.update(userInfo);

    const updatedUser = await User.findByPk(user.id, {
      attributes: { exclude: ["password"] },
    });

    delete updatedUser.dataValues.password;

    const expiresIn = 8 * 60 * 60; // 8 horas en segundos
    const token = jwt.sign(updatedUser.dataValues, SECRET_KEY, { expiresIn });
    const expirationTime = new Date(Date.now() + expiresIn * 1000); // Fecha de expiración
    return { token, expirationTime, user: updatedUser.dataValues };
  } catch (error) {
    console.error(error.message);
    throw error;
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
  putUserProfile,
  deleteUsers,
  postUserBasic,
  putUserRegisterInformation,
};
