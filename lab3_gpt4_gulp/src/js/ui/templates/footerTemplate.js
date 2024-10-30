export const createUpContentTemplate = ({text, button:{href, title}}) => {
    const template = `
    <div class = "upContent">
        <h1 class = "textContent">${text}</h1>
            <div class = "qtextBox">
                <a href="${href}"><button class="textBox">${title}</button></a>
            </div>
    </div>
    `;
    return template;
};

export const createAdressTemplate = ({image:{src, alt}}) => {
    const template = `
        <img class="logoImg" src="${src}" alt = "${alt}" />
    `;
    return template
};
export const createInputTemplate = ({ type, title }) => {
    switch (type) {
      case "text":
        return `
           <p class="headerRefs">${title}</p>
        `;
  
      case "button":
        return `
            <a href="" class="btn">${title}</a>
        `;
  
      default:
        return ``;
    }
  };

export const createReferencesTemplate = (Referenses)=>{
    const ReferencesTemp = Referenses
        .map((Referenses) => createInputTemplate(Referenses))
        .join("");
    const template = `
        <div class="Referenses">
                ${ReferencesTemp}
        </div>
    `;
    return template
};
export const createCompanyTemplate = (Company)=>{
    const CompanyTemp = Company
        .map((Company) => createInputTemplate(Company))
        .join("");

    const template = `
            <div class="company">
                ${CompanyTemp}
        </div>

    `;
    return template
};
export const createContactTemplate = ({
    text,
    adress,
    number,
    button:{href, title}
})=>{
    const template = `
    <p class="headerRefs">${text} </p>
            <p class="adressContact">${adress}</p>
            <p class="number">${number}</p>
            <a href="${href}" class="btn">${title}</a>
    `;
    return template
};

export const FooterTemplate = ({up_content_data, adress_data, references_data, company_data,contact_data}) => {
    console.log("references_data in FooterTemplate:", references_data);
    const UpContentTemplate = createUpContentTemplate(up_content_data)
    const AdressTemplate = createAdressTemplate(adress_data)
    const ReferencesTemplate = createReferencesTemplate(references_data)
    const CompanyTemplate = createCompanyTemplate(company_data)
    const ContactTemplate = createContactTemplate(contact_data)
    const resultTemplate =`
    <div class = "upContent">
        ${UpContentTemplate}
    </div>
    <div class = "lowContent">
        <div class = "adress">
        ${AdressTemplate}
        </div>
        <div class = "Referenses">
        ${ReferencesTemplate}
        </div>
        <div class = "company">
        ${CompanyTemplate}
        </div>
        <div class = "contact">
        ${ContactTemplate}
        </div>
    </div>
    `;
    return resultTemplate
}