export const createAllRightsTemplate = ({text})=> {
    const template = `
    <div>${text} </div>
    `;
    return template;
};

export const allRightsTemplate =({all_rights_data}) => {
    const AllRightsTemplate = createAllRightsTemplate(all_rights_data)
    const resulttemplate = `
        ${AllRightsTemplate}
    `;  
    return resulttemplate;
}