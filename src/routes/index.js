const { Router } = require('express');

//ROUTERS
const categoriesRouter = require('./categoriesRouter')

const router = Router();

//ROUTES
router.use('/categories', categoriesRouter)

module.exports = router;