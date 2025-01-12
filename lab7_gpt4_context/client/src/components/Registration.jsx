import registrationData from "../mockData/registrationData";

import useData from "../hooks/useData";
import Preloader from "./Preloader";

// The right container component
const RightContainerReg = ({ item } ) => {
    const {button} = item;
    return (
        <div className="right__container_reg">
            <a href={button.href}>
                <button className="cta_buttons__start">{button.title}</button>
            </a>
        </div>
    );
};

const LeftContainer = ( { element } ) => {
    const {link, text} = element;

    return (
        <div class="left_container_reg">
            <a href={link.href} className="cta_reg">{link.title}</a>
            <h3 class="content_reg">{text}</h3>
        </div>
    );
};

const Registration = () => {
    const { isLoading, isError, error, data } = useData({
        endpoint: "registration-data",
        options: {
          method: "GET",
        },
      });
    
      if (isError) {
        console.log("error");
        console.log(error);
      }
      if (isLoading) return <Preloader />;
  const renderedData = data || registrationData;
    return (
        <>
            <LeftContainer element={renderedData.left_container_regData} />
            <RightContainerReg item={renderedData.right__container_regData} />
        </>
    );
};

export default Registration;