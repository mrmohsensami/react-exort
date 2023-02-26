import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const Greeting = () => {
    return (
        <section className="d-flex">
            <Image title="This is title 1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapien.</Image>
            <Image title="This is title 2" />
        </section>
    );
};

const Image = (props) => {
    const { title, children } = props;
    return (
        <div style={{ flexDirection: "column" }} className="d-flex">
            <h3>{title}</h3>
            <img className="image" src="https://picsum.photos/400" alt="xxx" />
            <p>{children}</p>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Greeting />);
