import React, { useState, useMemo, useEffect } from "react";

function DarkMode() {
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);
    const doubleNumber = useMemo(() => {
        return slowFunction(number);
    }, [number]);
    const themeStyles = useMemo(() => {
        return {
            backgroundColor: dark ? "black" : "white",
            color: dark ? "white" : "black",
        };
    }, [dark]);
    useEffect(() => {
        console.log("theStyles");
    }, [themeStyles]);
    return (
        <div className="container">
            <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))} className="input" />
            <button onClick={() => setDark((prevDark) => !prevDark)} className="btn">
                Change Theme
            </button>
            <div style={themeStyles}>{doubleNumber}</div>
        </div>
    );
}

export default DarkMode;

function slowFunction(num) {
    console.log("calling slow function");
    for (let i = 0; i <= 99999999999999; i++) {
        return num * 2;
    }
}
