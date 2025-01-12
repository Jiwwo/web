import { useState } from "react";
import useData from "../../hooks/useData";
import Preloader from "../Preloader";
import {
    useBlogContext, 
    usePostBlogContext
} from "../../contexts/admin/BlogContext";

const AdminHeader = ({container_blogData}) => {
    const [mainTextData, setMainTextData] = useState(container_blogData.mainText);
    let BlogContext = useBlogContext();

    const handleMainTextData = (e) => {
        setMainTextData(e.target.value);
        BlogContext.container_blogData.mainText= e.target.value;
    };

    return (
        <div className="admin_container__block">
            <h3>Контент:</h3>
            <div className="block__item">
                <label>Заголовок:</label>
                <input type="text" className="item__long_input" value={mainTextData} onChange={handleMainTextData} />
            </div>
        </div>
    );
};

const AdminLeftBlog = ({ left_block_contentData }) => {
    const [src1Data, setSrc1Data] = useState(left_block_contentData.image1.src1);
    const [alt1Data, setAlt1Data] = useState(left_block_contentData.image1.alt1);
    const [date1Data, setDate1Data] = useState(left_block_contentData.date1);
    const [text1Data, setText1Data] = useState(left_block_contentData.text1);
    const [href1Data, setHref1Data] = useState(left_block_contentData.button.href1);
    const [title1Data, setTitle1Data] = useState(left_block_contentData.button.title1);
    let BlogContext = useBlogContext();

    const handleSrc1Data = (e) => {
        setSrc1Data(e.target.value);
        BlogContext.left_block_contentData.src1 = e.target.value;
    };

    const handleAlt1Data = (e) => {
        setAlt1Data(e.target.value);
        BlogContext.left_block_contentData.alt1 = e.target.value;
    };

    const handleDate1Data = (e) => {
        setDate1Data(e.target.value);
        BlogContext.left_block_contentData.date1 = e.target.value;
    };

    const handleText1Data = (e) => {
        setText1Data(e.target.value);
        BlogContext.left_block_contentData.text1 = e.target.value;
    };

    const handleHref1Data = (e) => {
        setHref1Data(e.target.value);
        BlogContext.left_block_contentData.href1 = e.target.value;
    };

    const handleTitle1Data = (e) => {
        setTitle1Data(e.target.value);
        BlogContext.left_block_contentData.title1 = e.target.value;
    };

    return (
        <div className="admin_container__block">
            <h3>Главный блок:</h3>
            <div className="block__item">
                <label>Загловок</label>
                <input type="text" className="item__long_input" value={text1Data} onChange={handleText1Data}/>
            </div>
            <div className="block__item">
                <label>Дата:</label>
                <input type="text" className="item__long_input" value={date1Data} onChange={handleDate1Data}/>
            </div>
            <div className="block__item">
                <label>Ссылка:</label>
                <input type="text" className="item__long_input" value={href1Data} onChange={handleHref1Data}/>
            </div>
            <div className="block__item">
                <label>Описание:</label>
                <input type="text" className="item__long_input" value={title1Data} onChange={handleTitle1Data}/>
            </div>
            <div className="block__item">
                <label>Маршрут изображения:</label>
                <input type="text" className="item__long_input" value={src1Data} onChange={handleSrc1Data}/>
            </div>
            <div className="block__item">
                <label>Наименование изображения:</label>
                <input type="text" className="item__long_input" value={alt1Data} onChange={handleAlt1Data}/>
            </div>
        </div>
    );
};

const AdminRightBlog = ({ right_block_contentData }) => {
    const BlogContext = useBlogContext();

    const handleUpdate = (index, key, value) => {
        const updatedData = [...right_block_contentData];
        updatedData[index][key] = value;
        BlogContext.right_block_contentData = updatedData;
    };

    return (
        <div className="admin_container__block">
            <h3>Боковой блок (справа):</h3>
            {right_block_contentData.map((item, index) => (
                <div key={index} className="block__item">
                    <h4>Элемент {index + 1}</h4>
                    <label>Текст:</label>
                    <input
                        type="text"
                        className="item__long_input"
                        value={item.text2}
                        onChange={(e) => handleUpdate(index, "text2", e.target.value)}
                    />
                    <label>Дата:</label>
                    <input
                        type="text"
                        className="item__long_input"
                        value={item.date2}
                        onChange={(e) => handleUpdate(index, "date2", e.target.value)}
                    />
                    <label>Ссылка:</label>
                    <input
                        type="text"
                        className="item__long_input"
                        value={item.button2.href2}
                        onChange={(e) => {
                            const updatedItem = { ...item, button2: { ...item.button2, href2: e.target.value } };
                            handleUpdate(index, "button2", updatedItem.button2);
                        }}
                    />
                    <label>Описание кнопки:</label>
                    <input
                        type="text"
                        className="item__long_input"
                        value={item.button2.title2}
                        onChange={(e) => {
                            const updatedItem = { ...item, button2: { ...item.button2, title2: e.target.value } };
                            handleUpdate(index, "button2", updatedItem.button2);
                        }}
                    />
                    <label>Маршрут изображения:</label>
                    <input
                        type="text"
                        className="item__long_input"
                        value={item.image2.src2}
                        onChange={(e) => {
                            const updatedItem = { ...item, image2: { ...item.image2, src2: e.target.value } };
                            handleUpdate(index, "image2", updatedItem.image2);
                        }}
                    />
                    <label>Наименование изображения:</label>
                    <input
                        type="text"
                        className="item__long_input"
                        value={item.image2.alt2}
                        onChange={(e) => {
                            const updatedItem = { ...item, image2: { ...item.image2, alt2: e.target.value } };
                            handleUpdate(index, "image2", updatedItem.image2);
                        }}
                    />
                </div>
            ))}
        </div>
    );
};

const AdminBlog = () => {
    const { isLoading, isError, error, data } = useData({
        endpoint: "blog",
        options: {
          method: "GET",
        },
    });

    const [isPostDataLoading, setIsPostDataLoading] = useState(false);
    const [isPostDataError, setIsPostDataError] = useState(false);
    const [postDataError, setPostDataError] = useState(null);

    const postData = usePostBlogContext();

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
        <div className="admin_container admin_Hero">
          <h2>Секция блог.</h2>
          <AdminHeader container_blogData={data.container_blogData} />
          <AdminLeftBlog left_block_contentData={data.left_block_contentData} />
          <AdminRightBlog right_block_contentData={data.right_block_contentData} />
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

export default AdminBlog;