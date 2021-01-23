import React from "react";
import { Link } from "gatsby";

const NotFound = () => (
    //! Render 404 UI
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
);

export default NotFound;
