import React from "react";
import Education from "./Education";
import Skills from "./Skills";
import Interests from "./Interests";

const Right = () => {
    //! Render right sidebar UI
    return (
        <div className={right}>
            <Skills />
            <Education />
            <Interests />
        </div>
    );
};

//! styles
const { right } = {
    right: "w-2/6 flex flex-col space-y-10",
};

export default Right;
