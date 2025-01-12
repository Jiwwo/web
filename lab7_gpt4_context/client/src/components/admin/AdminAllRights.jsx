import { useState } from "react";
import useData from "../../hooks/useData";
import Preloader from "../Preloader";
import {
    useAllRightsContext,
    usePostAllRightsContext,
} from "../../contexts/admin/AllRightsContext";

const AdminText = ({ text }) => {
    const [textData, setTextData] = useState(text);
    let AllRightsContext = useAllRightsContext();

    const handleTextData = (e) => {
        setTextData(e.target.value);
        AllRightsContext.text = e.target.value;
    };

    return (
        <div className="admin_container__block">
            <h3>Текст копирайта</h3>
            <div className="block__item">
                <label>Текст</label>
                <input type="text" className="item__long_input" value={textData} onChange={handleTextData} />
            </div>
        </div>
    );
};

const AdminAllRights = () => {
    const { isLoading, isError, error, data } = useData({
        endpoint: "all-rights",
        options: {
          method: "GET",
        },
    });

    const [isPostDataLoading, setIsPostDataLoading] = useState(false);
    const [isPostDataError, setIsPostDataError] = useState(false);
    const [postDataError, setPostDataError] = useState(null);

    const postData = usePostAllRightsContext();

    const handlePostData = async () => {
        try {
          setIsPostDataLoading(true);
          const { isPostDataError, postDataError } = await postData();
    
          setIsPostDataError(isPostDataError);
          setPostDataError(postDataError);
        } catch (error) {
          console.log(error);
          setIsPostDataError(true);
          setPostDataError(error.message);
        }
        setIsPostDataLoading(false);
    };
    
    if (isLoading) return <Preloader />;
    if (isError) return <div>{JSON.stringify(error)}</div>;
    if (!data) return <Preloader />;

    return (
        <div className="admin_container admin_Rights">
            <h2>Копирайт-секция</h2>
            <AdminText text={data.text} />
            <button className="btn primary-btn" onClick={handlePostData}>
            {isPostDataLoading ? <Preloader /> : ""} Сохранить
            </button>
            {isError && <div className="error">{JSON.stringify(error)}</div>}
            {isPostDataError && (
            <div className="error">{JSON.stringify(postDataError)}</div>
            )}
        </div>
    );
};

export default AdminAllRights;