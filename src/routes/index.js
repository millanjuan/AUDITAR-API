const { Router } = require("express");

//ROUTERS
const categoriesRouter = require("./categoriesRouter");
const usersRouter = require("./usersRouter");
const inspectionRouter = require("./inspectionsRouter");

const router = Router();

//ROUTES
router.use("/categories", categoriesRouter);
router.use("/user", usersRouter);
router.use("/inspection", inspectionRouter);

module.exports = router;
