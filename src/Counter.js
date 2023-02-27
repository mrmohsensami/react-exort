import React, { useState } from "react";

function Counter() {
    const [value, setValue] = useState(0);
    const incleaseDelay = () => {
        setTimeout(() => {
            setValue((prev) => {
                return prev + 1;
            });
        }, 2000);
    };
    return (
        <>
            <h1>Counter</h1>
            <h1>{value}</h1>
            <button onClick={() => setValue(value - 1)} className="btn">
                Decreae
            </button>
            <button onClick={() => setValue(0)} className="btn">
                Reset
            </button>
            <button onClick={() => setValue(value + 1)} className="btn">
                Increase
            </button>
            <h1>Delay Counter</h1>
            <h1>{value}</h1>
            <button onClick={incleaseDelay} className="btn">
                Increase Delay
            </button>
        </>
    );
}

export default Counter;
