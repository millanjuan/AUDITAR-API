const {
  getUserInspections,
  getInspectionById,
  postInspection,
} = require("../controllers/inspectionControllers");

const getUserInspectionsHandler = async (req, res) => {
  const id = req.user.id;
  const query = req.query;
  try {
    const inspections = await getUserInspections(id, query);
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
  const formData = req.body;
  const userId = req.user.id;
  try {
    const created = await postInspection(formData, userId);
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
