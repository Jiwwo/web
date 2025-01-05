const { isObjectHasProps } = require("./utils/validators");

const isVRDataValid = (data) => {
  // Проверка наличия основного объекта vr_Data
  isObjectHasProps(data, ["vr_Data"]);

  const { vr_Data } = data;

  // Проверка структуры объекта vr_Data
  isObjectHasProps(vr_Data, ["imageData", "bed_text_Data"]);

  // Проверка структуры объекта imageData
  const { imageData } = vr_Data;
  isObjectHasProps(imageData, ["alt", "src"]);

  // Проверка структуры объекта bed_text_Data
  const { bed_text_Data } = vr_Data;
  isObjectHasProps(bed_text_Data, ["header", "text", "button", "access"]);

  // Проверка структуры объекта button внутри bed_text_Data
  const { button } = bed_text_Data;
  isObjectHasProps(button, ["href", "title"]);
};

module.exports = isVRDataValid;