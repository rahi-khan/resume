import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";

const Brand = () => {
    //! Query Page Data
    const data = useStaticQuery(graphql`
        {
            file {
                childImageSharp {
                    fixed(width: 50, height: 50) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `);

    return (
        //! Render Brand Name/Logo
        <Link to="/" className={styles.brandLogo}>
            <Img fixed={data.file.childImageSharp.fixed} alt="Gatsby Logo" />
        </Link>
    );
};

//! Styles
const styles = {
    brandLogo: "pl-16",
};

export default Brand;
