import React from "react";
import Experiences from "./Experiences";
import Projects from "./Projects";

const Left = () => {
    //! Render left sidebar UI
    return (
        <div className={left}>
            <Experiences />
            <Projects />
        </div>
    );
};

//! styles
const { left } = {
    left: "w-full md:w-3/5 flex flex-col space-y-10",
};

export default Left;
