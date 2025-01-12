import { useState } from "react";
import useData from "../../hooks/useData";
import Preloader from "../Preloader";
import {
    useFooterContext,
    usePostFooterContext,
} from "../../contexts/admin/FooterContext";

const AdminUpContent = ({ up_content_data }) => {
    const [text1Data, setText1Data] = useState(up_content_data.text1);
    const [hrefData, setHrefData] = useState(up_content_data.button.href);
    const [titleData, setTitleData] = useState(up_content_data.button.title);
    let FooterContext = useFooterContext();

    const handleText1Data = (e) => {
        setText1Data(e.target.value);
        FooterContext.up_content_data.text1 = e.target.value;
    };

    const handleHrefData = (e) => {
        setHrefData(e.target.value);
        FooterContext.up_content_data.href = e.target.value;
    };

    const handleTitleData = (e) => {
        setTitleData(e.target.value);
        FooterContext.up_content_data.title = e.target.value;
    };

    return (
        <div className="admin_container__block">
            <h3>Заголовок и кнопка:</h3>
            <div className="block__item">
                <label>Заголовок:</label>
                <input type="text" className="item__long_input" value={text1Data} onChange={handleText1Data} />
            </div>
            <div className="block__item">
                <label>Маршрут кнопки:</label>
                <input type="text" className="item__long_input" value={hrefData} onChange={handleHrefData} />
            </div>
            <div className="block__item">
                <label>Текст кнопки:</label>
                <input type="text" className="item__long_input" value={titleData} onChange={handleTitleData} />
            </div>
        </div>
    );
};

const AdminAdress = ({ adress_data }) => {
    const [srcData, setSrcData] = useState(adress_data.image.src);
    const [altData, setAltData] = useState(adress_data.image.alt);
    let FooterContext = useFooterContext();

    const handleSrcData = (e) => {
        setSrcData(e.target.value);
        FooterContext.adress_data.src = e.target.value;
    };

    const handleAltData = (e) => {
        setAltData(e.target.value);
        FooterContext.adress_data.alt = e.target.value;
    };

    return (
        <div className="admin_container__block">
            <h3>Изображение:</h3>
            <div className="block__item">
                <label>Маршрут:</label>
                <input type="text" className="item__long_input" value={srcData} onChange={handleSrcData} />
            </div>
            <div className="block__item">
                <label>Наименование:</label>
                <input type="text" className="item__long_input" value={altData} onChange={handleAltData} />
            </div>
        </div>
    );
};

const AdminReferences = ({ references_data }) => {
    const [references, setReferences] = useState(references_data);
    let FooterContext = useFooterContext();

    const handleReferenceChange = (index, field, value) => {
        const updatedReferences = [...references];
        updatedReferences[index][field] = value;
        setReferences(updatedReferences);
        FooterContext.references_data = updatedReferences;
    };

    return (
        <div className="admin_container__block">
            <h3>Ссылки:</h3>
            {references.map((ref, index) => (
                <div key={index} className="block__item">
                    <label>Тип:</label>
                    <input
                        type="text"
                        className="item__short_input"
                        value={ref.type}
                        onChange={(e) => handleReferenceChange(index, "type", e.target.value)}
                    />
                    <label>Заголовок:</label>
                    <input
                        type="text"
                        className="item__long_input"
                        value={ref.title}
                        onChange={(e) => handleReferenceChange(index, "title", e.target.value)}
                    />
                </div>
            ))}
        </div>
    );
};

const AdminCompany = ({ company_data }) => {
    const [company, setCompany] = useState(company_data);
    let FooterContext = useFooterContext();

    const handleCompanyChange = (index, field, value) => {
        const updatedCompany = [...company];
        updatedCompany[index][field] = value;
        setCompany(updatedCompany);
        FooterContext.company_data = updatedCompany;
    };

    return (
        <div className="admin_container__block">
            <h3>Информация о компании:</h3>
            {company.map((item, index) => (
                <div key={index} className="block__item">
                    <label>Тип:</label>
                    <input
                        type="text"
                        className="item__short_input"
                        value={item.type}
                        onChange={(e) => handleCompanyChange(index, "type", e.target.value)}
                    />
                    <label>Заголовок:</label>
                    <input
                        type="text"
                        className="item__long_input"
                        value={item.title}
                        onChange={(e) => handleCompanyChange(index, "title", e.target.value)}
                    />
                </div>
            ))}
        </div>
    );
};

const AdminContact = ({ contact_data }) => {
    const [textData, setTextData] = useState(contact_data.text);
    const [adressData, setAdressData] = useState(contact_data.adress);
    const [numberData, setNumberData] = useState(contact_data.number);
    const [hrefData, setHrefData] = useState(contact_data.button.href);
    const [titleData, setTitleData] = useState(contact_data.button.title);
    let FooterContext = useFooterContext();

    const handleTextData = (e) =>{
        setTextData(e.target.value);
        FooterContext.contact_data.text = e.target.value;
    };

    const handleAdressData = (e) =>{
        setAdressData(e.target.value);
        FooterContext.contact_data.adress = e.target.value;
    };

    const handleNumberData = (e) =>{
        setNumberData(e.target.value);
        FooterContext.contact_data.number = e.target.value;
    };

    const handleHrefData = (e) =>{
        setHrefData(e.target.value);
        FooterContext.contact_data.href = e.target.value;
    };

    const handleTitleData = (e) =>{
        setTitleData(e.target.value);
        FooterContext.contact_data.title = e.target.value;
    };

    return (
        <div className="admin_container__block">
            <h3>Контакты:</h3>
            <div className="block__item">
                <label>Заголовок:</label>
                <input type="text" className="item__long_input" value={textData} onChange={handleTextData} />
            </div>
            <div className="block__item">
                <label>Адрес:</label>
                <input type="text" className="item__long_input" value={adressData} onChange={handleAdressData} />
            </div>
            <div className="block__item">
                <label>Номер:</label>
                <input type="text" className="item__long_input" value={numberData} onChange={handleNumberData} />
            </div>
            <div className="block__item">
                <label>Маршрут ссылки:</label>
                <input type="text" className="item__long_input" value={hrefData} onChange={handleHrefData} />
            </div>
            <div className="block__item">
                <label>Текст ссылки:</label>
                <input type="text" className="item__long_input" value={titleData} onChange={handleTitleData} />
            </div>
        </div>
    );
};

const AdminFooter = () => {
    const { isLoading, isError, error, data } = useData({
        endpoint: "footer",
        options: {
          method: "GET",
        },
    });

    const [isPostDataLoading, setIsPostDataLoading] = useState(false);
    const [isPostDataError, setIsPostDataError] = useState(false);
    const [postDataError, setPostDataError] = useState(null);

    const postData = usePostFooterContext();

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
          <h2>Секция футер.</h2>
          <AdminUpContent up_content_data={data.up_content_data} />
          <AdminAdress adress_data={data.adress_data} />
          <AdminReferences references_data={data.references_data} />
          <AdminCompany company_data={data.company_data} />
          <AdminContact contact_data={data.company_data} />
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

export default AdminFooter;