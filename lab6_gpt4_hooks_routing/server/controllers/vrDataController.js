const isVrDataValid = require("../validators/isVrDataValid");

const {
  getVrDataModel,
  postVrDataModel,
} = require("../model/files/vrDataModel");

const getVrData = (req, res, next) => {
  try {
    const data = getVrDataModel();

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const postVrData = (req, res, next) => {
  try {
    const data = req.body;

    // Validate the data
    isVrDataValid(data);

    // Write data to file through the model
    postVrDataModel(JSON.stringify(data));
    res.status(200).json({
      message: "VR data successfully updated",
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

module.exports = { getVrData, postVrData };
