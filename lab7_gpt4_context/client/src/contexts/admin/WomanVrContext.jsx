import { createContext, useContext, useRef } from "react";
import vr_Data from "../../mockData/vr_data";

const WomanVrContext = createContext();
const PostWomanVrContext = createContext();

const WomanVrContextProvider = ({ children }) => {
    const data = useRef(vr_Data);

    return (
        <WomanVrContext.Provider value={data.current}>
            {children}
        </WomanVrContext.Provider>
    );
};

const useWomanVrContext = () => useContext(WomanVrContext);
const usePostWomanVrContext = () => useContext(PostWomanVrContext);

export { useWomanVrContext, usePostWomanVrContext };
export default WomanVrContextProvider; 