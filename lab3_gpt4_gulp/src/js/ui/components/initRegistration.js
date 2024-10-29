import { registrationData } from "../../mockData/registrationData.js";
import { registrationTemplate } from "../templates/registrationTemplate.js";

const initRegistration = (registrationNode) => {
    registrationNode.insertAdjacentHTML("beforeend", registrationTemplate(registrationData));
};

export default initRegistration;