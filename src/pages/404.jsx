import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout/Layout";

const NotFound = () => (
    //! Render 404 UI
    <Layout>
        <div>
            <h1>
                Page Not Found{" "}
                <span role="img" aria-label="sad emoji">
                    😢
                </span>
            </h1>

            <Link to="/">
                <button>Back to Home</button>
            </Link>
        </div>
    </Layout>
);

export default NotFound;
