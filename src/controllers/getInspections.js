const { Inspection } = require("../db")
const { formatInspection } = require("../helpers/helpers")

const getInspections = async (req, res) => {
    try {
        const inspections = await Inspection.findAll();

        const response = inspections.map((inspection) => formatInspection(inspection));

        res.status(200).json(response);

    } catch (error) {
        console.error("Error Fetching Inspections:", error.message);
        res.status(500).json({ error: "Internal server error" })
    }
}

module.exports = getInspections;