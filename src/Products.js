import React from "react";
import { useFetch } from "./useFetch";
import Product from "./Product";

function Products() {
    const { products } = useFetch();
    return (
        <div>
            {products.map((product) => {
                return <Product {...product} />;
            })}
        </div>
    );
}

export default Products;
