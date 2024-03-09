const {
  getUserInspections,
  getInspectionById,
  postInspection,
} = require("../controllers/inspectionControllers");

const getUserInspectionsHandler = async (req, res) => {
  const id = req.user.id;

  try {
    const inspections = await getUserInspections(id);
    res.status(200).json(inspections);
  } catch (error) {
    console.error(error);
    res
      .status(error.statusCode || 500)
      .json({ error: error.error || "Internal Server Error" });
  }
};

const getInspectionByIdHandler = async (req, res) => {
  const { id } = req.params;

  try {
    const inspection = await getInspectionById(id);
    res.status(200).json(inspection);
  } catch (error) {
    console.error(error);
    res
      .status(error.statusCode || 500)
      .json({ error: error.error || "Internal Server Error" });
  }
};

const postInspectionHandler = async (req, res) => {
  const inspectionData = req.body;
  try {
    const created = await postInspection(inspectionData);
    res.status(201).json(created);
  } catch (error) {
    console.error(error);
    res
      .status(error.statusCode || 500)
      .json({ error: error.error || "Internal Server Error" });
  }
};

module.exports = {
  getUserInspectionsHandler,
  getInspectionByIdHandler,
  postInspectionHandler,
};
