const { Router } = require("express");
const inspectionRouter = Router();
const {
  getUserInspectionsHandler,
  getInspectionByIdHandler,
  postInspectionHandler,
} = require("../handlers/inspectionHandlers");
const verifyToken = require("../utils/verifications/verifyToken");
const verifyAdmin = require("../utils/verifications/verifyAdmin");
const {
  validateInspection,
} = require("../utils/validations/validateInspection");

//Endpoints

inspectionRouter.get("/", verifyToken, getUserInspectionsHandler);
inspectionRouter.get("/:id", verifyToken, getInspectionByIdHandler);
inspectionRouter.post(
  "/new",
  validateInspection,
  verifyToken,
  postInspectionHandler
);

module.exports = inspectionRouter;
