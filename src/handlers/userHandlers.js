const {
  validateUser,
  getUsers,
  getUserProfile,
  postUser,
  putUserProfile,
  deleteUsers,
} = require("../controllers/userControllers");

const loginHandler = async (req, res) => {
  const { username, password } = req.body;

  try {
    const login = await validateUser(username, password);
    if (login.token) {
      res.status(200).json({ token: login.token, user: login.user });
    } else {
      res.status(401).json({ message: "Invalid username/password." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const postUserHandler = async (req, res) => {
  const userData = req.body;
  try {
    const createdUser = await postUser(userData);
    if (createdUser.token) {
      res
        .status(200)
        .json({ token: createdUser.token, user: createdUser.user });
    } else {
      res.status(401).json({ message: "ERROR." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
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

const getUsersHandler = async () => {
  try {
    const users = await getUsers();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
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
  postUserHandler,
  putUserProfileHandler,
  deleteUsersHandler,
};
