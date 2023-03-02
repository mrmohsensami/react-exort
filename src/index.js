import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import DarkMode from "./DarkMode";
// import App from "./App";
// import Form from "./Form";
// import Condition from "./Condition";
// import Github from "./Github";
// import Window from "./Window";
// import Counter from "./Counter";
// import App from "./App";
// import { cars } from "./data";
// import Car from "./Car";

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
root.render(<DarkMode />);
