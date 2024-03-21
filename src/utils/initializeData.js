const fs = require("fs");
const { Category } = require("../db");
const path = require("path");

const informationFilePath = path.join(__dirname, "../dbData/information.json");

const initializeData = async () => {
  try {
    // Verificar si ya existen categorías en la base de datos
    const existingCategories = await Category.findAll();

    if (existingCategories.length === 0) {
      // No hay categorías existentes, entonces procedemos a leer el archivo y crearlas
      fs.readFile(informationFilePath, "utf8", async (err, data) => {
        if (err) {
          console.error("Error al leer el archivo de categorías:", err);
          return;
        }

        try {
          // Parsear el JSON
          const categories = JSON.parse(data);

          // Iterar sobre cada categoría
          for (const category of categories.data) {
            // Si hay un formulario en la categoría
            if (category.form) {
              // Convertir cada objeto del formulario a una cadena JSON
              category.form = JSON.stringify(category.form);
            }

            // Insertar la categoría en la base de datos
            await Category.create(category);
          }

          console.log("Categorías cargadas correctamente en la base de datos.");
        } catch (error) {
          console.error(
            "Error al analizar el archivo JSON de categorías:",
            error
          );
        }
      });
    } else {
      // Ya existen categorías en la base de datos, no es necesario crearlas nuevamente
      console.log(
        "Las categorías ya existen en la base de datos. No se crearon nuevas categorías."
      );
    }
  } catch (error) {
    console.error("Error al buscar las categorías en la base de datos:", error);
  }
};

module.exports = initializeData;
