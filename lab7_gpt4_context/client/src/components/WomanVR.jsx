import vr_Data from "../mockData/vr_data"; // Импорт данных

import useData from "../hooks/useData";
import Preloader from "./Preloader";

// Компонент для текстового блока с кнопкой
const TextContentPerson = ({ item }) => {
    const {access, header, text, button} = item;

    return (
        <div className="woman-vr__right">
            <p className="early_access_text">{access}</p>
            <h2 className="expectations_text">{header}</h2>
            <p className="bed_text">{text}</p>
            <a href={button.href} className="request_early_access">{button.title}</a>
        </div>
    );
};

// Главный компонент для отображения всего блока
const WomanVR = () => {
    const { isLoading, isError, error, data } = useData({
        endpoint: "vr-data",
        options: {
          method: "GET",
        },
      });
    
      if (isError) {
        console.log("error");
        console.log(error);
      }

      if (isLoading) return <Preloader />;
      const renderedData = data || vr_Data;

  return (
    <>
        <div className="woman-vr__left">
            <img src={renderedData.imageData.src} alt={renderedData.imageData.alt} />
        </div>
        <TextContentPerson item={renderedData.bed_text_Data} />
    </>
  );
};

export default WomanVR;