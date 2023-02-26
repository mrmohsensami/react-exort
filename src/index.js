import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const Greeting = () => {
    return (
        <section className="d-flex">
            <Image />
            <Image />
            <Image />
            <Image />
            <Image />
            <Image />
        </section>
    );
};

const Image = () => {
    return (
        <div style={{ flexDirection: "column" }} className="d-flex">
            <Title />
            <img className="image" src="https://picsum.photos/200/300" alt="xxx" />
        </div>
    );
};

const Title = () => {
    return (
        <>
            <h3>This is title</h3>
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Greeting />);
