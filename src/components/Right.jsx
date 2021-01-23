import React from "react";
import Skills from "./Skills";

const Right = () => {
    //! Render right sidebar UI
    return (
        <div className={right} style={{ border: "2px solid pink" }}>
            <Skills />
        </div>
    );
};

//! styles
const { right } = {
    right: "w-2/6",
};

export default Right;
