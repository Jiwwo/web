const isFooterDataValid = require("../validators/isFooterDataValid");

const {
  getFooterDataModel,
  postFooterDataModel,
} = require("../model/files/footerDataModel");

const getFooterData = (req, res, next) => {
  try {
    const data = getFooterDataModel();

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const postFooterData = (req, res, next) => {
  try {
    const data = req.body;

    // Validate the footer data
    isFooterDataValid(data);

    // Write data to file through the model
    postFooterDataModel(JSON.stringify(data));
    res.status(200).json({
      message: "Footer data successfully updated",
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

module.exports = { getFooterData, postFooterData };
