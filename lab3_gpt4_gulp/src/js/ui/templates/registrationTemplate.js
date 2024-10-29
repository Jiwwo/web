export const createLeftContainerRegTemplate = ({text, button: {href, title}}) => {
    const template = `
        <div class="left_container_reg">
            <h4 href="${href}" class="cta_reg">${title}</h4>
            <h3 class="content_reg">${text}</h3>
        </div>
    `; 
    return template;
  };

export const createRightContainerRegTemplate = ({button: {href, title}}) => {
    const template = `
        <div class="right__container_reg">
          <a href="${href}"><button class="cta_buttons__start btn">${title}</button></a>
        </div>
    `; 
    return template;
}

export const registrationTemplate = ({left_container_regData, right__container_regData}) => {

    const leftContainerRegItemsTemplate = createLeftContainerRegTemplate(left_container_regData)
    const rightContainerRegItemsTemplate = createRightContainerRegTemplate(right__container_regData)

    const resultTemplate = `  
        ${leftContainerRegItemsTemplate}  
        ${rightContainerRegItemsTemplate}
    `;

    return resultTemplate

}