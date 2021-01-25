import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Education = () => {
    //! Querying page data
    const data = useStaticQuery(graphql`
        {
            dataJson {
                education {
                    school
                    date
                    certificate
                }
            }
        }
    `);

    //! Render Education UI
    return (
        <div className={eduContainer}>
            <h1 className={title}>Education</h1>

            {data.dataJson.education.map(arr => (
                <div className={eduBucket}>
                    <h1 className="text-gray-800 font-bold text-lg">{arr.school}</h1>
                    <h2 className="text-gray-600 text-base font-semibold">{arr.date}</h2>
                    <p className="text-gray-600 text-sm">{arr.certificate}</p>
                </div>
            ))}
        </div>
    );
};

//! styles
const { eduContainer, title, eduBucket } = {
    eduContainer: "flex flex-col space-y-4",
    title: "text-blue-500 text-2xl font-bold tracking-wide",
    eduBucket: "flex flex-col space-y-0.5",
};

export default Education;
