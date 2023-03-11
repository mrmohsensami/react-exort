import React from "react";
import { Link } from "react-router-dom";

function Error() {
    return (
        <>
            <h1>404</h1>
            <p>Page Not Found</p>
            <hr />
            <Link to="/" className="btn">
                {" "}
                Back Home
            </Link>
        </>
    );
}

export default Error;
