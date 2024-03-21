const { Inspection, Category } = require("../db");
const { Op } = require("sequelize");

const getUserInspections = async (
  id,
  { page = 1, size = 12, companyName, fullname, date }
) => {
  try {
    const parsedPage = parseInt(page);
    const parsedSize = parseInt(size);
    if (
      isNaN(parsedPage) ||
      isNaN(parsedSize) ||
      parsedPage < 1 ||
      parsedSize < 1
    ) {
      throw {
        error: "Los parámetros de paginación son inválidos.",
        statusCode: 400,
      };
    }

    const options = {
      limit: parsedSize,
      offset: (parsedPage - 1) * parsedSize,
      where: {
        userId: id,
      },
      attributes: ["id", "companyName", "fullname", "inspectionDate"],
      include: [
        {
          model: Category,
          attributes: ["name", "image"],
          as: "category",
          where: {},
        },
      ],
    };

    if (companyName || fullname) {
      options.where[Op.or] = [];
      if (companyName) {
        options.where[Op.or].push({
          companyName: {
            [Op.iLike]: `%${companyName}%`,
          },
        });
      }
      if (fullname) {
        options.where[Op.or].push({
          fullname: {
            [Op.iLike]: `%${fullname}%`,
          },
        });
      }
    }

    if (date) {
      options.where.inspectionDate = date;
    }

    const { count, rows } = await Inspection.findAndCountAll(options);
    return {
      total: count,
      inspections: rows,
    };
  } catch (error) {
    console.error("Error al obtener las inspecciones:", error);
    throw {
      error: error.message || "Error interno del servidor",
      statusCode: error.statusCode || 500,
    };
  }
};

const getInspectionById = async (id) => {
  try {
    const inspection = await Inspection.findByPk(id);
    if (!inspection) {
      return { error: "Inspección no encontrada.", statusCode: 404 };
    }
    inspection.form = JSON.parse(inspection.form);
    const { createdAt, updatedAt, categoryId, userId, ...inspectionData } =
      inspection.dataValues;

    const category = await Category.findByPk(categoryId);

    category.form = JSON.parse(category.form);
    inspectionData.category = category;

    return inspectionData;
  } catch (error) {
    console.error(error.message);
    throw { error: "Error interno del servidor.", statusCode: 500 };
  }
};

const postInspection = async (formData, userId) => {
  try {
    const newInspection = await Inspection.create({
      ...formData,
      userId: userId,
    });
    return newInspection;
  } catch (error) {
    console.error(error.message);
    throw { error: "Error creando inspección.", statusCode: 400 };
  }
};

module.exports = {
  getUserInspections,
  getInspectionById,
  postInspection,
};
