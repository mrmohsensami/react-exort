import React from "react";

const Car = (props) => {
    const handleClick = () => {
        console.log("clicked");
    };
    const consoleClick = (title) => {
        console.log(title);
    };
    const { title, img, children } = props;
    return (
        <div style={{ flexDirection: "column" }} className="d-flex">
            <h3>{title}</h3>
            <img className="image" src={img} alt="xxx" />
            <p>{children}</p>
            <button onClick={handleClick}>Click me</button>
            <button onClick={() => consoleClick(title)}>Console title</button>
        </div>
    );
};

export default Car;
