import registrationData from "../mockData/registrationData";

// The right container component
export const RightContainerReg = ({ item } ) => {
    const {button} = item;
    return (
        <div className="right__container_reg">
            <a href={button.href}>
                <button className="cta_buttons__start">{button.title}</button>
            </a>
        </div>
    );
};

// The main Registration component that combines both left and right containers
const Registration = () => {
    const {left_container_regData, right__container_regData} = registrationData;
    return (
        <>
            <div class="left_container_reg">
                <a href={left_container_regData.button.href} className="cta_reg">
                    {left_container_regData.button.title}
                </a>
                <h3 class="content_reg">{left_container_regData.text}</h3>
            </div>
            <RightContainerReg item={right__container_regData} />
        </>
    );
};

export default Registration;