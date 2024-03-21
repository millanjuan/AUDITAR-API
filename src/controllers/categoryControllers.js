const { Category } = require("../db");

const getAllCategories = async () => {
  const categories = await Category.findAll({
    attributes: { exclude: ["form", "statement", "createdAt", "updatedAt"] },
    raw: true,
  });
  return categories;
};

const getCategoryById = async (categoryId) => {
  try {
    // Lee el contenido del archivo JSON
    const category = await Category.findByPk(categoryId);
    if (!category) {
      return { error: "Categoria no encontrada.", statusCode: 404 };
    }
    category.form = await JSON.parse(category.form);

    return category;
  } catch (error) {
    // Maneja los errores, por ejemplo, el archivo no existe o el formato es incorrecto
    console.error("Error fetching category:", error);
    throw error; // Puedes manejar el error de manera diferente según tus necesidades
  }
};

module.exports = {
  getAllCategories,
  getCategoryById,
};
