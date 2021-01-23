import React from "react";
import Experiences from "./Experiences";

const Left = () => {
    //! Render left sidebar UI
    return (
        <div className={left} style={{ border: "2px solid cyan" }}>
            <Experiences />
        </div>
    );
};

//! styles
const { left } = {
    left: "w-3/5",
};

export default Left;
