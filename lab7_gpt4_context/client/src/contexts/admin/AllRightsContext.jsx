import { createContext, useContext, useRef } from "react";
import allRightsData from "../../mockData/allRightsData";

const AllRightsContext = createContext();
const PostAllRightsContext = createContext();

const AllRightsContextProvider = ({ children }) => {
    const data = useRef(allRightsData);

    return (
        <AllRightsContext.Provider value={data.current}>
            {children}
        </AllRightsContext.Provider>
    );
};

const useAllRightsContext = () => useContext(AllRightsContext);
const usePostAllRightsContext = () => useContext(PostAllRightsContext);

export {useAllRightsContext, usePostAllRightsContext};

export default AllRightsContextProvider;
