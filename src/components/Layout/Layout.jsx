import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const Layout = ({ children }) => (
    //! Render Footer UI
    <div className={styles.layout}>
        <Header />
        <div className={styles.children}>{children}</div>
        <Footer />
    </div>
);

//! Styles
const styles = {
    layout: "h-screen flex flex-col",
    children: "flex-grow",
};

export default Layout;
