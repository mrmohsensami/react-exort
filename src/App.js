import React, { useState } from "react";
import { data } from "./data";

function App() {
    const [name, setName] = useState("Hello World");
    const [cars, setCars] = useState(data);
    const handleRemove = (id) => {
        let newItem = cars.filter((car) => car.id !== id);
        setCars(newItem);
    };
    return (
        <>
            <h2>{name}</h2>
            <button onClick={() => setName("mohsen")}>Click me</button>
            <hr />
            {cars.map((car) => {
                const { id, title } = car;
                return (
                    <div className="item d-flex" key={id}>
                        <h2>{title}</h2>
                        <button className="btn" onClick={() => handleRemove(id)}>
                            Remove Item
                        </button>
                    </div>
                );
            })}
            <button className="btn" onClick={() => setCars([])}>
                Clear All
            </button>
        </>
    );
}

export default App;
