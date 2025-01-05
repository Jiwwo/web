const { isObjectHasProps } = require("./utils/validators");

const isFooterDataValid = (data) => {
  // Проверяем наличие основного объекта footerData
  isObjectHasProps(data, ["footerData"]);

  const { footerData } = data;

  // Проверяем основные разделы footerData
  isObjectHasProps(footerData, [
    "up_content_data",
    "adress_data",
    "references_data",
    "company_data",
    "contact_data",
  ]);

  // Проверка up_content_data
  isObjectHasProps(footerData.up_content_data, ["text1", "button"]);
  isObjectHasProps(footerData.up_content_data.button, ["href", "title"]);

  // Проверка adress_data
  isObjectHasProps(footerData.adress_data, ["image"]);
  isObjectHasProps(footerData.adress_data.image, ["src", "alt"]);

  // Проверка references_data (массив)
  if (!Array.isArray(footerData.references_data)) {
    throw new Error("references_data должен быть массивом.");
  }
  footerData.references_data.forEach((item) => {
    isObjectHasProps(item, ["type", "title"]);
  });

  // Проверка company_data (массив)
  if (!Array.isArray(footerData.company_data)) {
    throw new Error("company_data должен быть массивом.");
  }
  footerData.company_data.forEach((item) => {
    isObjectHasProps(item, ["type", "title"]);
  });

  // Проверка contact_data
  isObjectHasProps(footerData.contact_data, [
    "text",
    "adress",
    "number",
    "button",
  ]);
  isObjectHasProps(footerData.contact_data.button, ["href", "title"]);
};

module.exports = isFooterDataValid;
