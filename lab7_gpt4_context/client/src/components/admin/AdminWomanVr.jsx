import { useState } from "react";
import useData from "../../hooks/useData";
import Preloader from "../Preloader";
import {
    useWomanVrContext,
    usePostWomanVrContext,
} from "../../contexts/admin/WomanVrContext";


const AdminImage = ({ imageData }) => {
    const [srcData, setSrcData] = useState(imageData.src);
    const [altData, setAltData] = useState(imageData.alt);
    let WomanVrContext = useWomanVrContext();

    const handleSrcData = (e) => {
        setSrcData(e.target.value);
        WomanVrContext.imageData.src = e.target.value;
    };

    const handleAltData = (e) => {
        setAltData(e.target.value);
        WomanVrContext.imageData.alt = e.target.value;
    };

    return (
        <div className="block__card">
            <div className="block__item">
                <label>Маршрут:</label>
                <input type="text" value={srcData} onChange={handleSrcData} />
            </div>
            <div className="block__item">
                <label>Наименование:</label>
                <input type="text" value={altData} onChange={handleAltData} />
            </div>
      </div>
    );
};

const AdminText = ({ bed_text_Data }) => {
    const [headerData, setHeaderData] = useState(bed_text_Data.header);
    const [textData, setTextData] = useState(bed_text_Data.text);
    const [accessData, setAccessData] = useState(bed_text_Data.access);
    const [hrefData, setHrefData] = useState(bed_text_Data.button.href);
    const [titleData, setTitleData] = useState(bed_text_Data.button.title);
    let WomanVrContext = useWomanVrContext();

    const handleHeaderData = (e) => {
        setHeaderData(e.target.value);
        WomanVrContext.bed_text_Data.header = e.target.value;
    };

    const handleTextData = (e) => {
        setTextData(e.target.value);
        WomanVrContext.bed_text_Data.text = e.target.value;
    };

    const handleAccessData = (e) => {
        setAccessData(e.target.value);
        WomanVrContext.bed_text_Data.access = e.target.value;
    };

    const handleHrefData = (e) => {
        setHrefData(e.target.value);
        WomanVrContext.bed_text_Data.button.href = e.target.value;
    };

    const handleTitleData = (e) => {
        setTitleData(e.target.value);
        WomanVrContext.bed_text_Data.button.title = e.target.value;
    };

    return (
        <div className="block__card">
            <div className="block__item">
                <label>Заголовок:</label>
                <input type="text" value={headerData} onChange={handleHeaderData} />
            </div>
            <div className="block__item">
                <label>Основной текст:</label>
                <input type="text" value={textData} onChange={handleTextData} />
            </div>
            <div className="block__item">
                <label>Текст на запрос:</label>
                <input type="text" value={accessData} onChange={handleAccessData} />
            </div>
            <div className="block__item">
                <label>Маршрут ссылки:</label>
                <input type="text" value={hrefData} onChange={handleHrefData} />
            </div>
            <div className="block__item">
                <label>Текст ссылки:</label>
                <input type="text" value={titleData} onChange={handleTitleData} />
            </div>
      </div>
    );
};

const AdminWomanVr = () => {
    const { isLoading, isError, error, data } = useData({
        endpoint: "vr-data",
        options: {
          method: "GET",
        },
    });
    
    const [isPostDataLoading, setIsPostDataLoading] = useState(false);
    const [isPostDataError, setIsPostDataError] = useState(false);
    const [postDataError, setPostDataError] = useState(null);

    const postData = usePostWomanVrContext();

    const handlePostData = async () => {
        try {
          setIsPostDataLoading(true);
          const { isPostDataError, postDataError } = await postData();
          setIsPostDataError(isPostDataError);
          setIsPostDataError(postDataError);
        } catch (error) {
          console.log(error);
          setIsPostDataError(isPostDataError);
          setPostDataError(postDataError);
        }
        setIsPostDataLoading(false);
    };

    if (isLoading) return <Preloader />;
    if (isError) return <div>{JSON.stringify(error)}</div>;
    if (!data) return <Preloader />;

    return (
        <div className="admin_container admin_Woman_VR">
            <h2>Секция с женщиной</h2>
            <AdminImage imageData={data.imageData} />
            <AdminText bed_text_Data={data.bed_text_Data} />
            <button className="btn primary-btn" onClick={handlePostData}>
                {isPostDataLoading && <Preloader />} Сохранить
            </button>
            {isError && <div className="error">{JSON.stringify(error)}</div>}
            {isPostDataError && (
                <div className="error">{JSON.stringify(postDataError)}</div>
            )}
        </div>
    );
};

export default AdminWomanVr;