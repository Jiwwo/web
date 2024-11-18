import { allRightsData } from "../mockData/allRightsData"; // Use named import

// Component remains the same
export const AllRights = () => {
    const { all_rights_data } = allRightsData;

    return (
        <>
            <div>{all_rights_data.text}</div>
        </>
    );
};

export default AllRights;
