import React, { useState, useEffect } from "react";
import Brand from "./HeaderComponents/Brand";
import Menubar from "./HeaderComponents/Menubar";
import NavItems from "./HeaderComponents/NavItems";

const Header = () => {
    //! Hamburger menu open/close state
    const [isOpen, setisOpen] = useState(false);

    //! Handle click on hamburger icon
    const handleClick = () => setisOpen(!isOpen);

    //! Close hamubrger menu while window resizing
    useEffect(() => {
        const hideMenu = () => {
            if (isOpen === true && window.innerWidth > 768) setisOpen(false);
        };

        window.addEventListener("resize", hideMenu);
        return () => {
            window.removeEventListener("resize", hideMenu);
        };
    });

    //? Render Header UI
    return (
        <nav className={styles.nav}>
            {/*//// Brand Name/logo */}
            <Brand />

            {/*//// Hamburger Menu */}
            <Menubar handleClick={handleClick} isOpen={isOpen} />

            {/*//// Nav Items */}
            <NavItems isOpen={isOpen} />
        </nav>
    );
};

//! Styles
const styles = {
    nav: "md:container mx-auto h-20 flex w-full justify-between items-center relative",
};

export default Header;
