import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Interests = () => {
    //! Querying page data
    const data = useStaticQuery(graphql`
        {
            dataJson {
                interests
            }
        }
    `);

    //! Render Skills UI
    return (
        <div className={interestsContainer} style={{ border: "2px solid #e05a07" }}>
            <h1 className={title}>Interests</h1>
            <p className="text-gray-600">{data.dataJson.interests}</p>
        </div>
    );
};

//! styles
const { interestsContainer, title } = {
    interestsContainer: "flex flex-col space-y-4",
    title: "text-blue-500 text-xl font-bold tracking-wide",
};

export default Interests;
