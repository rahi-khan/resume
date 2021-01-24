import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Experiences = () => {
    //! Querying page data
    const data = useStaticQuery(graphql`
        {
            dataJson {
                experiences {
                    company
                    jobTitle
                    date
                    jobDesc
                }
            }
        }
    `);

    //! Render Experience UI
    return (
        <div
            className={expContainer}
            // style={{ border: "2px solid green" }}
        >
            <h1 className={title}>Relevant Experiences</h1>

            {data.dataJson.experiences.map(jobContainer => (
                <div className={job}>
                    <h1 className="font-semibold text-base">
                        <span className="text-gray-900">{jobContainer.jobTitle}</span> @{" "}
                        <span className="text-gray-500">{jobContainer.company}</span>
                    </h1>

                    <h2 className="text-gray-600 text-sm font-semibold">{jobContainer.date}</h2>

                    <ul className={jobDesc}>
                        {jobContainer.jobDesc.map(desc => (
                            <li>{desc}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

//! styles
const { expContainer, title, job, jobDesc } = {
    expContainer: "flex flex-col space-y-7",
    title: "text-blue-500 text-xl font-bold tracking-wide",
    job: "flex flex-col space-y-1",
    jobDesc: "list-disc list-inside text-gray-600",
};

export default Experiences;
