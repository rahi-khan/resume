import React from "react";
import { IconContext } from "react-icons";
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlinePhone } from "react-icons/hi";
import { HiOutlineHome } from "react-icons/hi";
import { FiGithub } from "react-icons/fi";

const Header = () => {
    //! Render Header UI
    return (
        <div className={headerContainer} style={{ border: "2px solid red" }}>
            <h1 className={title}>Rahi Khan</h1>

            <h4 className={subtitle}>Front-End Developer</h4>

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
                            <span className={contacts}>rahikhan360@gmail.com</span>
                        </a>
                    </li>
                    <li className={navItem}>
                        <HiOutlinePhone />
                        <span className={contacts}>+8801873146332</span>
                    </li>
                    <li>
                        <a
                            href="https://rahikhan.gtsb.io/"
                            target="_blank"
                            rel="noreferrer"
                            className={navItem}
                        >
                            <HiOutlineHome />
                            <span className={contacts}>rahikhan.gtsb.io</span>
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
                            <span className={contacts}>github.com/rahi-khan</span>
                        </a>
                    </li>
                </IconContext.Provider>
            </ul>
        </div>
    );
};

//! styles
const { contactNav, navItem, title, subtitle, contacts, headerContainer } = {
    headerContainer: "flex flex-col space-y-3",
    title: "text-blue-500 text-7xl font-bold tracking-wide",
    subtitle: "text-2xl font-medium text-gray-800",
    contactNav: "flex space-x-8",
    navItem: "flex items-center text-gray-700 hover:text-gray-900 hover:underline",
    contacts: "ml-1",
};

export default Header;
