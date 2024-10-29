export const createContainerBlogTemplate = ({text}) => {
    const template = `
        <div class="container_blog">
            <h1 class="title_content_blog">${text}</h1>
        </div>
    `; 
    return template;
  };

export const createLeftBlockContentTemplate = ({image:{src, alt}, date, text, button:{href, title} }) => {
    const template = `
        <div class="left_block_content">
            <div class="block_content">
              <img
              class="blog_section__img"
              src="${src}"
              alt="${alt}"
              />
              
              <div class="block_text_left">
                <h4 class="date">${date}</h4>
                <h2 class="text_article">${text}</h2>
                <a href="${href}"class="link_arcticle">${title}</a>
              </div>
            </div>
          </div>
    `; 
    return template;
  };

  export const createRightBlockContentTemplate = ({image:{src, alt}, date, text, button:{href, title} }) => {
    const template = `
            <div class="block_content"> 
              <img
              class="blog_section__img"
              src="${src}"
              alt="${alt}"
              />
              <div class="block_text_right">
                <h4 class="date">${date}</h4>
                <h2 class="text_article">${text}</h2>
                <a href="${href}" class="link_arcticle">${title}</a>
              </div>
            </div>
    `; 
    return template;
  };


export const blogTemplate = ({container_blogData, left_block_contentData, right_block_contentData}) => {

    const containerBlogItemsTemplate = createContainerBlogTemplate(container_blogData)
    const containerLeftBlockContentItemsTemplate = createLeftBlockContentTemplate(left_block_contentData)
    const containerRightBlockContentItemsTemplate = right_block_contentData.map((item) => 
      createRightBlockContentTemplate(item)).join("");

    const resultTemplate = `
    ${containerBlogItemsTemplate}
    <div class="container_content_blog">
        ${containerLeftBlockContentItemsTemplate}
        <div class="right_block_content"> 
            ${containerRightBlockContentItemsTemplate}
        </div>
    </div>
    `;
    

    return resultTemplate

}