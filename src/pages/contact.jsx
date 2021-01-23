import React from "react";
import Layout from "../components/Layout/Layout";
import SEO from "../components/SEO/seo";
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
    //! Render Contact UI
    return (
        <Layout>
            <SEO title="Contact" description="Contact Page" />

            <section className={styles.section}>
                <h1 className={styles.header}>Get in touch</h1>

                <ul className={styles.lists}>
                    <li className="mr-12">
                        <a
                            href="https://twitter.com/rahikhan_dev"
                            target="_blank"
                            rel="noreferrer"
                            className={styles.listItem}
                        >
                            <h3>
                                <FaTwitter />
                            </h3>
                        </a>
                    </li>
                    <li className="mr-12">
                        <a
                            href="https://www.instagram.com/_rahikhan_/"
                            target="_blank"
                            rel="noreferrer"
                            className={styles.listItem}
                        >
                            <h3>
                                <FaInstagram />
                            </h3>
                        </a>
                    </li>
                    <li className="mr-12">
                        <a
                            href="https://www.linkedin.com/in/rahikhan/"
                            target="_blank"
                            rel="noreferrer"
                            className={styles.listItem}
                        >
                            <h3>
                                <FaLinkedin />
                            </h3>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/rahi-khan"
                            target="_blank"
                            rel="noreferrer"
                            className={styles.listItem}
                        >
                            <h3>
                                <FaGithub />
                            </h3>
                        </a>
                    </li>
                </ul>
            </section>
        </Layout>
    );
};

//! Styles
const styles = {
    section: "h-full flex flex-col justify-center items-center text-center",
    header: "mb-8 text-4xl font-semibold",
    lists: "flex justify-between",
    listItem: "text-3xl text-gray-600 hover:text-white",
};

export default Contact;
