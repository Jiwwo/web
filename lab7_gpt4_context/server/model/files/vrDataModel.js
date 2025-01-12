const { readFileSync, writeFileSync } = require("fs");
const { join } = require("path");

const filePath = join(__dirname, "..", "..", "db", "files", "vrData.json");

const getVrDataModel = () => {
    try {
      const file = readFileSync(filePath, "utf-8");
      return JSON.parse(file);
    } catch (error) {
      if (error.code === "ENOENT") {
        // File doesn't exist, return default structure or throw custom error
        return { vr_Data: {} };
      }
      throw new Error("Failed to read data from file");
    }
  };

const postVrDataModel = (data) => {
  try {
    writeFileSync(filePath, data);
  } catch (error) {
    console.error(error);
    throw new Error("Failed to write data to file");
  }
};

module.exports = { getVrDataModel, postVrDataModel };
