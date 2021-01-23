import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Skills = () => {
    //! Querying page data
    const data = useStaticQuery(graphql`
        {
            dataJson {
                skillset {
                    name
                    skills
                }
            }
        }
    `);

    //! Render Skills UI
    return (
        <div className={skillsContainer} style={{ border: "2px solid #e05a07" }}>
            <h1 className={title}>Skills</h1>

            {data.dataJson.skillset.map(arr => (
                <div className={skillsBucket}>
                    <h1 className="font-semibold text-base text-gray-900">{arr.name}</h1>
                    <p className="text-gray-600 text-sm">{arr.skills}</p>
                </div>
            ))}
        </div>
    );
};

//! styles
const { skillsContainer, title, skillsBucket, jobDesc } = {
    skillsContainer: "flex flex-col space-y-4",
    title: "text-blue-500 text-xl font-bold tracking-wide",
    skillsBucket: "flex flex-col space-y-0.5",
    jobDesc: "list-disc list-inside text-gray-600",
};

export default Skills;
