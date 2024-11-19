const isAllRightsDataValid = require("../validators/isAllRightsDataValid");

const {
  getAllRightsDataModel,
  postAllRightsDataModel,
} = require("../model/files/allRightsDataModel");

const getAllRightsData = (req, res, next) => {
  try {
    const data = getAllRightsDataModel();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const postAllRightsData = (req, res, next) => {
  try {
    const data = req.body;

    // Validate the allRightsData
    isAllRightsDataValid(data);

    // Write data to file through the model
    postAllRightsDataModel(JSON.stringify(data));
    res.status(200).json({
      message: "All rights data successfully updated",
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

module.exports = { getAllRightsData, postAllRightsData };
