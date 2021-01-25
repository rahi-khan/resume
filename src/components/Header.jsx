import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { IconContext } from "react-icons";
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlinePhone } from "react-icons/hi";
import { HiOutlineHome } from "react-icons/hi";
import { FiGithub } from "react-icons/fi";

const Header = () => {
    //! Query page data
    const data = useStaticQuery(graphql`
        {
            dataJson {
                name
                job
                email
                phone
                personalSite
                github
            }
        }
    `);

    const { name, job, email, phone, personalSite, github } = data.dataJson;

    //! Render Header UI
    return (
        <div className={headerContainer}>
            <h1 className={title}>{name}</h1>

            <h4 className={subtitle}>{job}</h4>

            <ul className={contactNav}>
                <IconContext.Provider value={{ size: "1.3rem" }}>
                    <li>
                        <a
                            href="mailto:rahikhan360@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                            className={navItem}
                        >
                            <HiOutlineMail />
                            <span className={contacts}>{email}</span>
                        </a>
                    </li>
                    <li className={navItem}>
                        <HiOutlinePhone />
                        <span className={contacts}>{phone}</span>
                    </li>
                    <li>
                        <a
                            href="https://rahikhan.gtsb.io/"
                            target="_blank"
                            rel="noreferrer"
                            className={navItem}
                        >
                            <HiOutlineHome />
                            <span className={contacts}>{personalSite}</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/rahi-khan"
                            target="_blank"
                            rel="noreferrer"
                            className={navItem}
                        >
                            <FiGithub />
                            <span className={contacts}>{github}</span>
                        </a>
                    </li>
                </IconContext.Provider>
            </ul>
        </div>
    );
};

//! styles
const { contactNav, navItem, title, subtitle, contacts, headerContainer } = {
    headerContainer: "flex flex-col space-y-4 md:space-y-3",
    title: "text-blue-500 text-7xl font-bold tracking-wide",
    subtitle: "text-2xl font-semibold text-gray-800",
    contactNav: "flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-8",
    navItem: "flex items-center text-gray-700 hover:text-gray-900",
    contacts: "md:ml-1",
};

export default Header;
