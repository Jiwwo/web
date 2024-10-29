export const createImageTemplate = ({src, alt}) => {
    const template = `
        <div class="image">
            <img
                class="dura_vr__img"
                src="${src}"
                alt="${alt}"
            />
        </div>
  `;
  
    return template;
  };


export const createTextContentPersonTemplate = ({
    header, 
    text, 
    button: {href, title}
}) => {
    const template = `
        <div class="text_vr_dura">
            <h2 class="person_content"> ${header}</h2>
            <p class="bed_text">${text}</p>
            <a href="${href}" class="right_cta_a">${title}</a>
        </div>
    `;

    return template;
    };

  export const vr_Template = ({imageData, bed_text_Data}) => {
    const imageItemsTemplate = createImageTemplate(imageData)
    const textContentPersonItemTemplate = createTextContentPersonTemplate(bed_text_Data)
    
    const resultTemplate = `  
        ${imageItemsTemplate}  
        ${textContentPersonItemTemplate}
    `;

    return resultTemplate
  }