import { footerData} from "../../mockData/footerData.js";
import { FooterTemplate} from "../templates/footerTemplate.js";

console.log("footerData:", footerData); 

const initFooter = (FooterNode) => {
    FooterNode.insertAdjacentHTML("beforeend", FooterTemplate(footerData));
};

export default initFooter;