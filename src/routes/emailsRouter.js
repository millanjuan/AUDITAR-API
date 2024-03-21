const { Router } = require("express");
const emailsRouter = Router();
const verifyToken = require("../utils/verifications/verifyToken");
const {
  validateWelcomeEmail,
  validateInspectionEmail,
} = require("../utils/validations/validateEmail");
const {
  welcomeEmailHandler,
  inspectionEmailHandler,
} = require("../handlers/emailHandlers");

//EndPoints

emailsRouter.post(
  "/welcome",
  verifyToken,
  validateWelcomeEmail,
  welcomeEmailHandler
);

emailsRouter.post(
  "/inspection",
  verifyToken,
  validateInspectionEmail,
  inspectionEmailHandler
);

module.exports = emailsRouter;
