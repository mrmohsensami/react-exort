import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <h1>Home</h1>
            <hr />
            <Link to="/about" className="btn">
                {" "}
                About
            </Link>
        </>
    );
}

export default Home;
