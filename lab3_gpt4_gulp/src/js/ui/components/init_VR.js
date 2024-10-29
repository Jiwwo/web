import { vr_Data } from "../../mockData/vr_data.js";
import { vr_Template} from "../templates/vrTemplate.js";

const init_vr = (vr_Node) => {
    vr_Node.insertAdjacentHTML("beforeend", vr_Template(vr_Data));
};

export default init_vr;