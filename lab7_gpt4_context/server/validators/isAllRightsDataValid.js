const { isObjectHasProps } = require("./utils/validators");

const isAllRightsDataValid = (data) => {
  // Ensure the data contains the "allRightsData" object
  isObjectHasProps(data, ["allRightsData"]);

  const { allRightsData } = data;

  // Ensure the allRightsData object contains "text"
  isObjectHasProps(allRightsData, ["text"]);
};

module.exports = isAllRightsDataValid;
