import React, { useState } from "react";
import { data } from "./data";

export const useFetch = () => {
    const [products, setProducts] = useState(data);

    return { products };
};
