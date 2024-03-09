const { Router } = require("express");
const userRouter = Router();
const {
  loginHandler,
  getUsersHandler,
  getUserProfileHandler,
  putUserProfileHandler,
  deleteUsersHandler,
  postUserBasicHandler,
  putUserRegisterHandler,
} = require("../handlers/userHandlers");
const verifyToken = require("../utils/verifications/verifyToken");
const verifyAdmin = require("../utils/verifications/verifyAdmin");
const { validateUser } = require("../utils/validations/validateUser");

//Endpoints
userRouter.post("/login", loginHandler);
userRouter.get("/", verifyToken, verifyAdmin, getUsersHandler);
userRouter.get("/profile", verifyToken, getUserProfileHandler);
userRouter.post("/new", postUserBasicHandler);
userRouter.put("/register", validateUser, putUserRegisterHandler);
userRouter.put("/profile", verifyToken, putUserProfileHandler);
userRouter.delete("/:id", verifyToken, verifyAdmin, deleteUsersHandler);

module.exports = userRouter;
