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
        <div className={expContainer}>
            <h1 className={title}>Relevant Experiences</h1>

            {data.dataJson.experiences.map(jobContainer => (
                <div className={job}>
                    <h1>
                        <span className={jobTitle}>{jobContainer.jobTitle}</span>
                        <span className={company}> @ {jobContainer.company}</span>
                    </h1>

                    <h2 className={date}>{jobContainer.date}</h2>

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
const { expContainer, title, job, jobTitle, company, date, jobDesc } = {
    expContainer: "flex flex-col space-y-4",
    title: "text-blue-500 text-2xl font-bold tracking-wide",
    job: "flex flex-col space-y-1 pb-4",
    jobTitle: "text-gray-800 font-bold text-lg",
    company: "text-gray-500 font-semibold text-lg",
    date: "text-gray-600 text-base font-semibold",
    jobDesc: "list-disc list-inside text-gray-600 text-sm",
};

export default Experiences;
