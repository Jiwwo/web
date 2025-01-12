import allRightsData from "../mockData/allRightsData"; // Use named import

import useData from "../hooks/useData";
import Preloader from "./Preloader";

// Component remains the same
export const AllRights = () => {
    const { isLoading, isError, error, data } = useData({
        endpoint: "all-rights",
        options: {
          method: "GET",
        },
      });
    
      if (isError) {
        console.log("error");
        console.log(error);
      }
      if (isLoading) return <Preloader />;
  const renderedData = data || allRightsData;
    const { text } = renderedData;

    return (
        <>
            <div>{text}</div>
        </>
    );
};

export default AllRights;
