const {
  validateUser,
  getUsers,
  getUserProfile,
  putUserProfile,
  deleteUsers,
  postUserBasic,
  putUserRegisterInformation,
} = require("../controllers/userControllers");

const loginHandler = async (req, res) => {
  const { username, password } = req.body;

  try {
    const login = await validateUser(username, password);
    if (login.token) {
      res
        .status(200)
        .json({
          token: login.token,
          user: login.user,
          expirationTime: login.expirationTime,
        });
    } else {
      res.status(401).json({ message: "Invalid username/password." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const postUserBasicHandler = async (req, res) => {
  const userData = req.body;
  try {
    const createdBasic = await postUserBasic(userData);
    if (createdBasic) {
      return res.status(201).json(createdBasic);
    } else {
      return res
        .status(400)
        .json({ error: "El correo electrónico ya está en uso." });
    }
  } catch (error) {
    console.error("Error al crear usuario básico:", error);
    return res
      .status(500)
      .json({ error: "Hubo un problema al crear el usuario." });
  }
};

const getUserProfileHandler = async (req, res) => {
  const userId = req.user.id;

  try {
    const userInfo = await getUserProfile(userId);
    res.status(200).json(userInfo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getUsersHandler = async (req, res) => {
  try {
    const users = await getUsers();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const putUserRegisterHandler = async (req, res) => {
  const userInfo = req.body;
  try {
    const updatedUser = await putUserRegisterInformation(userInfo);
    res.status(200).json(updatedUser);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Por favor contactese con un administrador." });
  }
};

const putUserProfileHandler = async (req, res) => {
  const userId = req.user.id;
  const updatedUserInfo = req.body;

  try {
    const updatedUser = await putUserProfile(userId, updatedUserInfo);
    res.status(200).json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteUsersHandler = async (req, res) => {
  const { id } = req.params;

  try {
    await deleteUsers(id);
    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  loginHandler,
  getUsersHandler,
  getUserProfileHandler,
  putUserProfileHandler,
  deleteUsersHandler,
  postUserBasicHandler,
  putUserRegisterHandler,
};
