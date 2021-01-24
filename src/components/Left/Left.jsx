import React from "react";
import Experiences from "./Experiences";
import Projects from "./Projects";

const Left = () => {
    //! Render left sidebar UI
    return (
        <div
            className={left}
            // style={{ border: "2px solid cyan" }}
        >
            <Experiences />
            <Projects />
        </div>
    );
};

//! styles
const { left } = {
    left: "w-3/5 flex flex-col space-y-8",
};

export default Left;
