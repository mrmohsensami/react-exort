import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const cars = [
    {
        id: 1,
        title: "This is title 1",
        img: "https://picsum.photos/id/5/400",
    },
    {
        id: 2,
        title: "This is title 2",
        img: "https://picsum.photos/id/15/400",
    },
];

const Greeting = () => {
    return (
        <section className="d-flex">
            {cars.map((car) => {
                const { title, img } = car;
                return <Image key={car.id} title={title} img={img} />;
            })}
        </section>
    );
};

const Image = (props) => {
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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Greeting />);
