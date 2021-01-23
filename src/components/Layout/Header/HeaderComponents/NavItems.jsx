import React from "react";
import { Link } from "gatsby";

//! Nav List
const navList = ["home", "about", "contact"];

const NavItems = ({ isOpen }) => (
    //! Render Nav Lists
    <div
        className={
            isOpen
                ? "flex flex-col justify-center items-center text-center bg-gray-900 w-full h-screen absolute top-20 md:block z-50 font-bold text-3xl"
                : "pr-16 hidden md:block"
        }
    >
        {navList.map((navItem, idx) => (
            <Link to={`/${navItem}`} className={styles.item} key={idx}>
                <span className="capitalize"> {navItem} </span>
            </Link>
        ))}
    </div>
);

//! Styles
const styles = {
    item: "mb-9 md:mb-0 md:pr-4 last:pr-0 last:mb-0 text-gray-400 hover:text-white",
};

export default NavItems;
