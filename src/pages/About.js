import React from "react";
import { Link } from "react-router-dom";

function About() {
    return (
        <>
            <h1>About</h1>
            <hr />
            <Link to="/" className="btn">
                {" "}
                Home
            </Link>
        </>
    );
}

export default About;
