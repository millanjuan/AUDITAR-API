const {
    getAllCategories,
    getCategoryById,
} = require('../controllers/categoryControllers')

const getAllCategoriesHandler = (req, res) => {
    try {
        const categories = getAllCategories();
        res.status(200).json(categories);
    } catch (error) {
        console.error('Error in getAllCategoriesHandler:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getCategoryByIdHandler = async (req, res) => {
    const {id} = req.params;

    try {
        const category = await getCategoryById(id);

        if (category) {
            res.status(200).json(category);
        } else {
            res.status(404).json({ error: `Category not found.` });
        }
    } catch (error) {
        console.error('Error in getCategoryByIdHandler:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    getAllCategoriesHandler,
    getCategoryByIdHandler,
};