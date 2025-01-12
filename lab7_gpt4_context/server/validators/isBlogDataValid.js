const { isArrayHasLength, isObjectHasProps } = require("./utils/validators");

const isBlogDataValid = (data) => {
  // проверяем объект на наличие полей и соответствие типу "объект"
  isObjectHasProps(data, ["container_blogData", "left_block_contentData", "right_block_contentData"]);

  const { container_blogData, left_block_contentData, right_block_contentData } = data;

  // проверяем объект container_blogData на наличие полей и соответствие типу "объект"
  isObjectHasProps(container_blogData, ["mainText"]);

  // проверяем объект left_block_contentData на наличие полей и соответствие типу "объект"
  isObjectHasProps(left_block_contentData, ["image1", "date1", "text1", "button1"]);
  isObjectHasProps(left_block_contentData.image1, ["src1", "alt1"]);
  isObjectHasProps(left_block_contentData.button1, ["href1", "title1"]);

  // проверяем массив right_block_contentData на наличие объектов и соответствие типу "массив"
  isArrayHasLength(right_block_contentData);
  
  // проверяем объекты внутри массива right_block_contentData на наличие полей
  right_block_contentData.forEach((item, index) => {
    const imageKey = `image${index + 2}`;
    const buttonKey = `button${index + 2}`;
    const dateKey = `date${index + 2}`;
    const textKey = `text${index + 2}`;

    isObjectHasProps(item, [imageKey, dateKey, textKey, buttonKey]);
    isObjectHasProps(item[imageKey], [`src${index + 2}`, `alt${index + 2}`]);
    isObjectHasProps(item[buttonKey], [`href${index + 2}`, `title${index + 2}`]);
  });
};

module.exports = isBlogDataValid;
