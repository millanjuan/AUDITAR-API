const information = require("../dbData/information.json");
const fs = require("fs/promises");
const path = require("path");

const informationFilePath = path.join(__dirname, "../dbData/information.json");

const getAllCategories = () => {
  const categories = information.data.map((category) => ({
    id: category.id,
    name: category.name,
    image: category.image,
  }));
  return categories;
};

const getCategoryById = async (categoryId) => {
  try {
    // Lee el contenido del archivo JSON
    const data = await fs.readFile(informationFilePath, "utf-8");

    // Convierte el contenido a un objeto JavaScript
    const information = JSON.parse(data);

    // Busca la categoría por ID (convertido a número)
    const foundCategory = information.data.find(
      (category) => category.id === parseInt(categoryId)
    );

    // Devuelve la categoría encontrada o null si no se encuentra
    return foundCategory || null;
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
