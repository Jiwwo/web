const { isObjectHasProps } = require("./utils/validators");

const isBlogDataValid = (data) => {
  // Проверяем наличие ключа blogData
  isObjectHasProps(data, ["blogData"]);

  const { blogData } = data;

  // Проверяем объект blogData на наличие основных полей
  isObjectHasProps(blogData, ["container_blogData", "left_block_contentData", "right_block_contentData"]);

  // Проверяем container_blogData
  const { container_blogData } = blogData;
  isObjectHasProps(container_blogData, ["text"]);

  if (typeof container_blogData.text !== "string") {
    throw new Error("Поле 'text' в container_blogData должно быть строкой.");
  }

  // Проверяем left_block_contentData
  const { left_block_contentData } = blogData;
  isObjectHasProps(left_block_contentData, ["image", "date", "text", "button"]);
  isObjectHasProps(left_block_contentData.image, ["src", "alt"]);
  isObjectHasProps(left_block_contentData.button, ["href", "title"]);

  if (typeof left_block_contentData.date !== "string") {
    throw new Error("Поле 'date' в left_block_contentData должно быть строкой.");
  }
  if (typeof left_block_contentData.text !== "string") {
    throw new Error("Поле 'text' в left_block_contentData должно быть строкой.");
  }

  // Проверяем right_block_contentData
  const { right_block_contentData } = blogData;
  if (!Array.isArray(right_block_contentData)) {
    throw new Error("Поле 'right_block_contentData' должно быть массивом.");
  }

  right_block_contentData.forEach((block, index) => {
    isObjectHasProps(block, ["image", "date", "text", "button"]);
    isObjectHasProps(block.image, ["src", "alt"]);
    isObjectHasProps(block.button, ["href", "title"]);

    if (typeof block.date !== "string") {
      throw new Error(`Поле 'date' в элементе right_block_contentData[${index}] должно быть строкой.`);
    }
    if (typeof block.text !== "string") {
      throw new Error(`Поле 'text' в элементе right_block_contentData[${index}] должно быть строкой.`);
    }
  });
};

module.exports = isBlogDataValid;
