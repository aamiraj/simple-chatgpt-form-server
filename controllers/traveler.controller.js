const {
  storeTravelerDataService,
  getAllTravelerDataService,
  getSpecificTravelerService,
} = require("../services/traveler.service");

exports.storeTravelerData = async (req, res) => {
  try {
    const data = req.body;
    const result = await storeTravelerDataService(data);
    res.status(200).json({
      message: "Data stored successfully.",
      data: result,
    });
  } catch (error) {
    res.status(404).json({
      message: "Failed to store data.",
      error: error,
    });
  }
};

exports.getAllTravelerData = async (req, res) => {
  try {
    const result = await getAllTravelerDataService();
    res.status(200).json({
      message: "Data queried successfully.",
      data: result,
    });
  } catch (error) {
    res.status(404).json({
      message: "Failed to query data.",
      error: error,
    });
  }
};

exports.getSpecificTraveler = async (req, res) => {
  try {
    const query = req.query;
    const result = await getSpecificTravelerService(query);
    res.status(200).json({
      message: "Data queried successfully.",
      data: result,
    });
  } catch (error) {
    res.status(404).json({
      message: "Failed to query data.",
      error: error,
    });
  }
};
