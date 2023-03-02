import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Items from "./Items";

// const App = () => {
//     return (
//         <section className="d-flex">
//             {cars.map((car) => {
//                 const { title, img } = car;
//                 return <Car key={car.id} title={title} img={img} />;
//             })}
//         </section>
//     );
// };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Items />);
