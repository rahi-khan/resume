import React from "react";
import Layout from "../components/Layout/Layout";
import SEO from "../components/SEO/seo";
import { useStaticQuery, graphql } from "gatsby";

const About = () => {
    //! Query Page Data
    const data = useStaticQuery(graphql`
        {
            allAboutDataJson {
                edges {
                    node {
                        name
                        url
                    }
                }
            }
        }
    `);

    //! Render About UI
    return (
        <Layout>
            <SEO title="About" description="About Page" />

            <section className={styles.section}>
                <h1 className={styles.header}>What's in this template?</h1>

                <ul className={styles.lists}>
                    {data.allAboutDataJson.edges.map(({ node }) => (
                        <li className={styles.listItem}>
                            <a href={node.url} target="_blank" rel="noreferrer">
                                <h5>{node.name}</h5>
                            </a>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    );
};

//! Styles
const styles = {
    section: "h-full flex flex-col justify-center items-center text-center",
    header: "mb-8 text-5xl",
    lists: "flex flex-col items-center text-xl mb-5",
    listItem: "mb-2 text-gray-300 hover:text-white",
};

export default About;
