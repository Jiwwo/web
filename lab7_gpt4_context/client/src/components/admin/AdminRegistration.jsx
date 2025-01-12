import { useState } from "react";
import useData from "../../hooks/useData";
import Preloader from "../Preloader";
import {
    useRegistrationContext,
    usePostRegistrationContext,
} from "../../contexts/admin/RegistrationContext";

const AdminLeftContainer = ({ left_container_regData }) => {
    const [textData, setTextData] = useState(left_container_regData.text);
    const [hrefData, setHrefData] = useState(left_container_regData.link.href);
    const [titleData, setTitleData] = useState(left_container_regData.link.title);
    let RegistrationContext = useRegistrationContext();

    const handleTextData = (e) => {
        setTextData(e.target.value);
        RegistrationContext.left_container_regData.text = e.target.value;
    };

    const handleHrefData = (e) => {
        setHrefData(e.target.value);
        RegistrationContext.left_container_regData.link.href = e.target.value;
    };
    const handleTitleData = (e) => {
        setTitleData(e.target.value);
        RegistrationContext.left_container_regData.link.title = e.target.value;
    };

    return (
        <div className="block__card">
            <div className="block__item">
                <label>Заголовок:</label>
                <input type="text" value={textData} onChange={handleTextData} />
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

const AdminRightContainer = ({ right__container_regData }) => {
    const [hrefData, setHrefData] = useState(right__container_regData.button.href);
    const [titleData, setTitleData] = useState(right__container_regData.button.title);
    let RegistrationContext = useRegistrationContext();

    const handleHrefData = (e) => {
        setHrefData(e.target.value);
        RegistrationContext.right__container_regData.button.href = e.target.value;
    };
    const handleTitleData = (e) => {
        setTitleData(e.target.value);
        RegistrationContext.right__container_regData.button.title = e.target.value;
    };

    return (
        <div className="block__card">
            <div className="block__item">
                <label>Маршрут кнопки:</label>
                <input type="text" value={hrefData} onChange={handleHrefData} />
            </div>
            <div className="block__item">
                <label>Текст кнопки:</label>
                <input type="text" value={titleData} onChange={handleTitleData} />
            </div>
      </div>
    );
};

const AdminRegistration = () => {
    const { isLoading, isError, error, data } = useData({
        endpoint: "registration-data",
        options: {
          method: "GET",
        },
    });

    const [isPostDataLoading, setIsPostDataLoading] = useState(false);
    const [isPostDataError, setIsPostDataError] = useState(false);
    const [postDataError, setPostDataError] = useState(null);

    const postData = usePostRegistrationContext();

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
        <div className="admin_container admin_Registration">
          <h2>Секция регистрации</h2>
          <AdminLeftContainer left_container_regData={data.left_container_regData} />
          <AdminRightContainer right__container_regData={data.right__container_regData} />
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

export default AdminRegistration;