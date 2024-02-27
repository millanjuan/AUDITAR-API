const { Router } = require('express');

//ROUTERS
const categoriesRouter = require('./categoriesRouter');
const usersRouter = require('./usersRouter');

const router = Router();

//ROUTES
router.use('/categories', categoriesRouter)
router.use('/user', usersRouter);

module.exports = router;