import React from "react";
import { data } from "../data";
import { NavLink } from "react-router-dom";

function Products() {
    return (
        <ul>
            {data.map((item) => {
                return (
                    <li>
                        <p>{item.title}</p>
                        <p>{item.price}</p>
                        <NavLink className="btn" to={`/products/${item.id}`}>
                            Show product
                        </NavLink>
                    </li>
                );
            })}
        </ul>
    );
}

export default Products;
