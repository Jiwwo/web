import { 
    up_content_data, 
    adress_data, 
    references_data, 
    company_data, 
    contact_data 
} from '../mockData/footerData'; // Named imports

// Компонент для адреса и логотипа
const FooterAddress = ({ address, image }) => (
    <div className="adress">
        <img className="logoImg" src={image.src} alt={image.alt} />
        <p className="mainAdress">{address}</p>
    </div>
);

// Компонент для ссылок
const FooterLinks = ({ titleCategory, links, className }) => (
    <div className={className}>
        <p className="headerRefs">{titleCategory}</p>
        {links.map((link, index) => (
            <a href="#" key={index}>
                {link.title}
            </a>
        ))}
    </div>
);

// Компонент для контактов
const FooterContacts = ({ titleCategory, contactInfo }) => (
    <div className="contact">
        <p className="headerRefs">{titleCategory}</p>
        <p className="adressContact">{contactInfo.adress}</p>
        <p className="number">{contactInfo.number}</p>
        <a href={contactInfo.button.href}>{contactInfo.button.title}</a>
    </div>
);

// Главный компонент Footer
const Footer = () => {
    return (
        <section className="section footer">
            {/* Верхний контент */}
            <div className="upContent">
                <h1 className="textContent">{up_content_data.text}</h1>
                <a href={up_content_data.button.href}>
                    <button className="textBox">{up_content_data.button.title}</button>
                </a>
            </div>

            {/* Основное меню */}
            <div className="lowContent">
                <div className="items">
                    {/* Адрес и логотип */}
                    <FooterAddress
                        address={contact_data.adress}
                        image={adress_data.image}
                    />
                    {/* Ссылки */}
                    <FooterLinks
                        titleCategory={references_data[0].title}
                        links={references_data.slice(1)}
                        className="Referenses"
                    />
                    {/* Компания */}
                    <FooterLinks
                        titleCategory={company_data[0].title}
                        links={company_data.slice(1)}
                        className="company"
                    />
                    {/* Контакты */}
                    <FooterContacts
                        titleCategory={contact_data.text}
                        contactInfo={contact_data}
                    />
                </div>
            </div>
        </section>
    );
};

export default Footer;
