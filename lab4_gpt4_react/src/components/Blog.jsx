import { blogData } from "../mockData/blogData";

// Компонент для верхнего блока с заголовком
export const ContainerBlog = ({ text }) => (
  <div className="container_blog">
    <h1 className="title_content_blog" dangerouslySetInnerHTML={{ __html: text }} />
  </div>
);

// Компонент для левого блока
export const LeftBlockContent = ({ image: { src, alt }, date, text, button: { href, title } }) => (
  <div className="left_block_content">
    <div className="block_content">
      <img className="blog_section__img" src={src} alt={alt} />
      <div className="block_text_left">
        <h4 className="date">{date}</h4>
        <h2 className="text_article">{text}</h2>
        <a href={href} className="link_article">{title}</a>
      </div>
    </div>
  </div>
);

// Компонент для правого блока
export const RightBlockContent = ({ image: { src, alt }, date, text, button: { href, title } }) => (
  <div className="block_content">
    <img className="blog_section__img" src={src} alt={alt} />
    <div className="block_text_right">
      <h4 className="date">{date}</h4>
      <h2 className="text_article">{text}</h2>
      <a href={href} className="link_article">{title}</a>
    </div>
  </div>
);

// Главный компонент для отображения всего блока блога
const Blog = ({
  container_blogData = blogData.container_blogData,
  left_block_contentData = blogData.left_block_contentData,
  right_block_contentData = blogData.right_block_contentData,
}) => {
  if (!container_blogData || !left_block_contentData || !right_block_contentData) {
    return <p>Данные блога отсутствуют.</p>;
  }

  return (
    <>
      <ContainerBlog text={container_blogData.text} />
      <div className="container_content_blog">
        <LeftBlockContent {...left_block_contentData} />
        <div className="right_block_content">
          {right_block_contentData.map((item, index) => (
            <RightBlockContent key={index} {...item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
