import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Projects = () => {
    //! Query page data
    const data = useStaticQuery(graphql`
        {
            dataJson {
                projects {
                    name
                    demo
                    repo
                    desc
                }
            }
        }
    `);

    //! Render Projects UI
    return (
        <div className={projectsContainer} style={{ border: "2px solid #e05a07" }}>
            <h1 className={title}>Projects</h1>

            {data.dataJson.projects.map(arr => (
                <div className={projectsBucket}>
                    <h1 className="font-semibold text-base text-gray-900">{arr.name}</h1>
                    {/* <p className="text-gray-600 text-sm">{arr.skills}</p> */}
                </div>
            ))}
        </div>
    );
};

//! styles
const { projectsContainer, title, projectsBucket } = {
    projectsContainer: "flex flex-col space-y-4",
    title: "text-blue-500 text-xl font-bold tracking-wide",
    projectsBucket: "flex flex-col space-y-0.5",
};

export default Projects;
