const { Inspection, User } = require("../db");

const getUserInspections = async (id) => {
  try {
    const user = await User.findByPk(id);
    if (!user) {
      return { error: "Usuario no encontrado.", statusCode: 404 };
    }

    const inspections = await Inspection.findAll({
      where: {
        userId: id,
      },
      attributes: ["id", "companyName", "fullname", "identity", "email"],
    });
    return inspections;
  } catch (error) {
    console.error(error.message);
    throw { error: "Error interno del servidor.", statusCode: 500 };
  }
};

const getInspectionById = async (id) => {
  try {
    const inspection = await Inspection.findByPk(id);
    if (!inspection) {
      return { error: "Inspección no encontrada.", statusCode: 404 };
    }

    return inspection;
  } catch (error) {
    console.error(error.message);
    throw { error: "Error interno del servidor.", statusCode: 500 };
  }
};

const postInspection = async (inspectionData) => {
  try {
    const newInspection = await Inspection.create(inspectionData);
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
