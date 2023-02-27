import React, { useState, useEffect } from "react";

function Window() {
    const [size, setSize] = useState(window.innerWidth);

    const checkSize = () => {
        setSize(window.innerWidth);
    };

    useEffect(() => {
        console.log("useEffect");
        window.addEventListener("resize", checkSize);
        return () => {
            window.removeEventListener("resize", checkSize);
            console.log("clean up");
        };
    });

    console.log("render");

    return (
        <>
            <h2>Window</h2>
            <h2>{size}</h2>
        </>
    );
}

export default Window;
