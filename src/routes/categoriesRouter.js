const { Router } = require('express');
const categoriesRouter = Router();
const {
    getAllCategoriesHandler, 
    getCategoryByIdHandler
} = require('../handlers/categoryHandlers');

//EndPoints

categoriesRouter.get('/', getAllCategoriesHandler);
categoriesRouter.get('/:id', getCategoryByIdHandler);

module.exports = categoriesRouter;