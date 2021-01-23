import React from "react";
import Header from "../components/Header/Header";
import SEO from "../components/SEO/seo";

const Index = () => (
    //! Render Home UI
    <>
        <SEO />
        <div className={container}>
            <Header />
        </div>
    </>
);

//! styles
const { container } = {
    container: "container mx-auto py-10 px-8",
};

export default Index;
