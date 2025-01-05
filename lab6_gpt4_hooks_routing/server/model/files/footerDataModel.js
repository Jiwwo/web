const { readFileSync, writeFileSync } = require("fs");
const { join } = require("path");

const filePath = join(__dirname, "..", "..", "db", "files", "footerData.json");

const getFooterDataModel = () => {
  try {
    const file = readFileSync(filePath, "utf-8");
    return JSON.parse(file);
  } catch (error) {
    console.error(error);
    throw new Error("Failed to read footer data from file");
  }
};

const postFooterDataModel = (data) => {
  try {
    writeFileSync(filePath, data);
  } catch (error) {
    console.error(error);
    throw new Error("Failed to write footer data to file");
  }
};

module.exports = { getFooterDataModel, postFooterDataModel };
