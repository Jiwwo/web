import { createContext, useContext, useRef } from "react";
import registrationData from "../../mockData/registrationData";

const RegistrationContext = createContext();
const PostRegistrationContext = createContext();

const RegistrationContextProvider = ({ children }) => {
    const data = useRef(registrationData);

    return (
        <RegistrationContext.Provider value={data.current}>
            {children}
        </RegistrationContext.Provider>
    );
};

const useRegistrationContext = () => useContext(RegistrationContext);
const usePostRegistrationContext = () => useContext(PostRegistrationContext);

export { useRegistrationContext, usePostRegistrationContext };
export default RegistrationContextProvider;