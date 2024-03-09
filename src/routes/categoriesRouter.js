const { Router } = require("express");
const categoriesRouter = Router();
const verifyToken = require("../utils/verifications/verifyToken");
const {
  getAllCategoriesHandler,
  getCategoryByIdHandler,
} = require("../handlers/categoryHandlers");

//EndPoints

categoriesRouter.get("/", verifyToken, getAllCategoriesHandler);
categoriesRouter.get("/:id", verifyToken, getCategoryByIdHandler);

module.exports = categoriesRouter;
