import { blogData } from "../mockData/blogData";

import useData from "../hooks/useData";
import Preloader from "./Preloader";

// Компонент для верхнего блока с заголовком
export const ContainerBlog = ({ mainText }) => {
  return <h1 className="title_content_blog" dangerouslySetInnerHTML={{ __html: mainText }} />;
};

// Компонент для левого блока
export const LeftBlockContent = ({ image1: { src1, alt1 }, date1, text1, button1: { href1, title1 } }) => (
  <div className="left_block_content">
    <div className="block_content">
      <img className="blog_section__img" src={src1} alt={alt1} />
      <div className="block_text_left">
        <h4 className="date">{date1}</h4>
        <h2 className="text_article">{text1}</h2>
        <a href={href1} className="link_article">{title1}</a>
      </div>
    </div>
  </div>
);

// Компонент для второй статьи
export const Article2 = ({ image2: { src2, alt2 }, date2, text2, button2: { href2, title2 } }) => (
  <div className="block_content">
    <img className="blog_section__img" src={src2} alt={alt2} />
    <div className="block_text_right">
      <h4 className="date">{date2}</h4>
      <h2 className="text_article">{text2}</h2>
      <a href={href2} className="link_article">{title2}</a>
    </div>
  </div>
);

// Компонент для третьей статьи
export const Article3 = ({ image3: { src3, alt3 }, date3, text3, button3: { href3, title3 } }) => (
  <div className="block_content">
    <img className="blog_section__img" src={src3} alt={alt3} />
    <div className="block_text_right">
      <h4 className="date">{date3}</h4>
      <h2 className="text_article">{text3}</h2>
      <a href={href3} className="link_article">{title3}</a>
    </div>
  </div>
);

// Компонент для четвертой статьи
export const Article4 = ({ image4: { src4, alt4 }, date4, text4, button4: { href4, title4 } }) => (
  <div className="block_content">
    <img className="blog_section__img" src={src4} alt={alt4} />
    <div className="block_text_right">
      <h4 className="date">{date4}</h4>
      <h2 className="text_article">{text4}</h2>
      <a href={href4} className="link_article">{title4}</a>
    </div>
  </div>
);

// Компонент для пятой статьи
export const Article5 = ({ image5: { src5, alt5 }, date5, text5, button5: { href5, title5 } }) => (
  <div className="block_content">
    <img className="blog_section__img" src={src5} alt={alt5} />
    <div className="block_text_right">
      <h4 className="date">{date5}</h4>
      <h2 className="text_article">{text5}</h2>
      <a href={href5} className="link_article">{title5}</a>
    </div>
  </div>
);

// Главный компонент для отображения всего блока блога
const Blog = () => {
  const { isLoading, isError, error, data } = useData({
    endpoint: "blog",
    options: {
      method: "GET",
    },
  });

  if (isError) {
    console.log("error");
    console.log(error);
  }

  if (isLoading) return <Preloader />;

  const renderedData = data || blogData;
  const { container_blogData, left_block_contentData, right_block_contentData } = renderedData;

  if (!container_blogData || !left_block_contentData || !right_block_contentData) {
    return <p>Данные блога отсутствуют.</p>;
  }

  return (
    <>
      <div className="container_blog">
        <ContainerBlog mainText={container_blogData.mainText} />
      </div>
      <div className="container_content_blog">
        <LeftBlockContent {...left_block_contentData} />
        <div className="right_block_content">
          <Article2 {...right_block_contentData[0]} />
          <Article3 {...right_block_contentData[1]} />
          <Article4 {...right_block_contentData[2]} />
          <Article5 {...right_block_contentData[3]} />
        </div>
      </div>
    </>
  );
};

export default Blog;
