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
    container: "lg:container lg:mx-auto py-10 px-10 lg:px-20 flex flex-col space-y-20",
    main: "flex flex-col space-y-14 md:space-y-0 md:flex-row md:justify-between",
};

export default Index;
