import React from "react";
import { IconContext } from "react-icons";
import { FiMenu } from "react-icons/fi";
import { GiSplitCross } from "react-icons/gi";

const Menubar = ({ handleClick, isOpen }) => (
    //! Render Hamburger Icon
    <div className={styles.bars} onClick={handleClick}>
        <IconContext.Provider value={{ size: "1.7rem" }}>
            {isOpen ? <GiSplitCross /> : <FiMenu />}
        </IconContext.Provider>
    </div>
);

//! Styles
const styles = {
    bars: "pr-16 cursor-pointer md:hidden",
};

export default Menubar;
