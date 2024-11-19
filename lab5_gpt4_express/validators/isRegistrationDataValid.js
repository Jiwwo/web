const { isObjectHasProps } = require("./utils/validators");

const isRegistrationDataValid = (data) => {
  // Проверяем наличие ключа registrationData
  isObjectHasProps(data, ["registrationData"]);

  const { registrationData } = data;

  // Проверяем структуру объекта registrationData
  isObjectHasProps(registrationData, ["left_container_regData", "right__container_regData"]);

  // Проверяем left_container_regData
  const { left_container_regData } = registrationData;
  isObjectHasProps(left_container_regData, ["text", "button"]);

  if (typeof left_container_regData.text !== "string") {
    throw new Error("Поле 'text' в left_container_regData должно быть строкой.");
  }

  const { button: leftButton } = left_container_regData;
  isObjectHasProps(leftButton, ["href", "title"]);

  if (typeof leftButton.href !== "string" || typeof leftButton.title !== "string") {
    throw new Error("Поля 'href' и 'title' в button объекта left_container_regData должны быть строками.");
  }

  // Проверяем right__container_regData
  const { right__container_regData } = registrationData;
  isObjectHasProps(right__container_regData, ["button"]);

  const { button: rightButton } = right__container_regData;
  isObjectHasProps(rightButton, ["href", "title"]);

  if (typeof rightButton.href !== "string" || typeof rightButton.title !== "string") {
    throw new Error("Поля 'href' и 'title' в button объекта right__container_regData должны быть строками.");
  }
};

module.exports = isRegistrationDataValid;
