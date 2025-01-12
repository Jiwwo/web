const { readFileSync, writeFileSync } = require("fs");
const { join } = require("path");

const filePath = join(__dirname, "..", "..", "db", "files", "blogData.json");

const getBlogDataModel = () => {
  try {
    const file = readFileSync(filePath, "utf-8");
    return JSON.parse(file);
  } catch (error) {
    console.error(error);
    throw new Error("Failed to read data from file");
  }
};

const postBlogDataModel = (data) => {
  try {
    writeFileSync(filePath, data);
  } catch (error) {
    console.error(error);
    throw new Error("Failed to write data to file");
  }
};

module.exports = { getBlogDataModel, postBlogDataModel };
