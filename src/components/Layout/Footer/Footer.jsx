import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Footer = () => {
    //! Query Page Data
    const data = useStaticQuery(graphql`
        {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `);

    //! Render Footer UI
    return (
        <h6 className={styles.footer}>
            Created by{" "}
            <a href="https://twitter.com/rahikhan_dev" className={styles.author}>
                {data.site.siteMetadata.author}
            </a>
        </h6>
    );
};

//! Styles
const styles = {
    footer: "text-center font-semibold py-5",
    author: "text-purple-500",
};

export default Footer;
