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
        <div className={projectsContainer}>
            <h1 className={title}>Top Projects</h1>

            {data.dataJson.projects.map(arr => (
                <div className={projectsBucket}>
                    <h1 className="text-gray-800 font-bold text-lg">{arr.name}</h1>
                    <h1 className="text-gray-600 text-sm">{arr.desc}</h1>
                </div>
            ))}
        </div>
    );
};

//! styles
const { projectsContainer, title, projectsBucket } = {
    projectsContainer: "flex flex-col space-y-4",
    title: "text-blue-500 text-2xl font-bold tracking-wide",
    projectsBucket: "flex flex-col space-y-0.5",
};

export default Projects;
