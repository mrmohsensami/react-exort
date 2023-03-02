import React, { useCallback, useState } from "react";
import Item from "./Item";

function Items() {
    const [number, setNumber] = useState(1);
    const [dark, setDark] = useState(false);
    const getItems = useCallback(
        (inc) => {
            return [number + inc, number + 1 + inc, number + 2 + inc];
        },
        [number]
    );
    const theme = {
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black",
    };
    return (
        <div className="container" style={theme}>
            <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))} className="input" />
            <button onClick={() => setDark((prevDark) => !prevDark)} className="btn">
                Change Theme
            </button>
            <Item getItems={getItems} />
        </div>
    );
}

export default Items;
