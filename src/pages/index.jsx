import React from "react";
import Header from "../components/Header";
import Left from "../components/Left/Left";
import Right from "../components/Right/Right";
import SEO from "../components/SEO/seo";

const Index = () => (
    //! Render Home UI
    <>
        <SEO />
        <div className={container}>
            <Header />
            <div className={main}>
                <Left />
                <Right />
            </div>
        </div>
    </>
);

//! styles
const { container, main } = {
    container: "container mx-auto py-10 px-20 flex flex-col space-y-20",
    main: "flex justify-between",
};

export default Index;
