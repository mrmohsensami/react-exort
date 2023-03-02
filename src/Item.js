import React, { useState, useEffect } from "react";

function Item({ getItems }) {
    const [items, setItems] = useState([]);
    useEffect(() => {
        setItems(getItems(5));
        console.log("updating items");
    }, [getItems]);
    return items.map((item, index) => <div key={index}>{item}</div>);
}

export default Item;
