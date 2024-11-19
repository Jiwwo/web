const { isObjectHasProps } = require("./utils/validators");

const isAllRightsDataValid = (data) => {
  // Ensure the data contains the "allRightsData" object
  isObjectHasProps(data, ["allRightsData"]);

  const { allRightsData } = data;

  // Ensure the allRightsData object contains "all_rights_data"
  isObjectHasProps(allRightsData, ["all_rights_data"]);

  // Validate the "all_rights_data" object
  isObjectHasProps(allRightsData.all_rights_data, ["text"]);
};

module.exports = isAllRightsDataValid;
