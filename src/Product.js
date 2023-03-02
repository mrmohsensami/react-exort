import React from "react";
import PropType from "prop-types";
import defaultImage from "./assets/default.jpg";

function Product({ title, img, price }) {
    return (
        <div>
            <h1>{title}</h1>
            <p>${price}</p>
            <div>
                <img src={img.url} alt={title} />
            </div>
        </div>
    );
}

Product.PropType = {
    name: PropType.string.isRequired,
    price: PropType.number.isRequired,
    img: PropType.object.isRequired,
};

Product.defaultProps = {
    name: "Default Name",
    price: 40,
    img: { url: defaultImage },
};

export default Product;
