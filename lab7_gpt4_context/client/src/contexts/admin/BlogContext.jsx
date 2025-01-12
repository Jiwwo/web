import { createContext, useContext, useRef } from "react";
import { blogData } from "../../mockData/blogData";

const BlogContext = createContext();
const PostBlogContext = createContext();

const BlogContextProvider = ({children}) => {
    const data = useRef(blogData);

    return (
        <BlogContext.Provider value={data.current}>
            {children}
        </BlogContext.Provider>
    );
};

const useBlogContext = () => useContext(BlogContext);
const usePostBlogContext = () => useContext(PostBlogContext);

export {useBlogContext, usePostBlogContext};

export default BlogContextProvider;