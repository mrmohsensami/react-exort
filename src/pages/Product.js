import React from "react";
import { useParams } from "react-router-dom";

import { data } from "../data";

function Product() {
    const { productId } = useParams();
    const product = data.find((product) => product.id === parseInt(productId));
    return (
        <>
            <h1>{product.title}</h1>
            <div>
                <img src={product?.img.url} alt={product.title} />
            </div>
            <p>{product.price}</p>
        </>
    );
}

export default Product;
