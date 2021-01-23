import React from "react";
import Header from "../components/Header";
import Left from "../components/Left";
import Right from "../components/Right";
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
    container: "container mx-auto py-10 px-8 flex flex-col",
    main: "flex justify-between",
};

export default Index;
