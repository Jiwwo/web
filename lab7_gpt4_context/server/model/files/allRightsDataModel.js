const { readFileSync, writeFileSync } = require("fs");
const { join } = require("path");

const filePath = join(__dirname, "..", "..", "db", "files", "allRightsData.json");

const getAllRightsDataModel = () => {
  try {
    const file = readFileSync(filePath, "utf-8");
    return JSON.parse(file);
  } catch (error) {
    console.error(error);
    throw new Error("Failed to read all rights data from file");
  }
};

const postAllRightsDataModel = (data) => {
  try {
    writeFileSync(filePath, data);
  } catch (error) {
    console.error(error);
    throw new Error("Failed to write all rights data to file");
  }
};

module.exports = { getAllRightsDataModel, postAllRightsDataModel };
