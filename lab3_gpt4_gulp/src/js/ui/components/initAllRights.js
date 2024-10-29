import {allRightsTemplate} from "../templates/allRightsTemplate.js";
import {allRightsData} from "../../mockData/allRightsData.js";

const initAllRights = (allRightsNode) => {
    allRightsNode.insertAdjacentHTML("beforeend", allRightsTemplate(allRightsData));
};

export default initAllRights;