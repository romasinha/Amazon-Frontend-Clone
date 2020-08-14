import React from 'react';
import "./Product.css";

function Product({id, title, price, rating, image}) {
    return (
        <div className = "product">
            <div className = "product__info">
                <div className = "product__title"> {title}</div>
                <div className = "product__price">
                    <span>Rs. </span><strong>{price}</strong>
                </div>
                <div className = "product__rating">
                    {Array(rating).fill().map(
                        (_) => (
                            <p>⭐️</p>
                            )
                    )}
                </div>
            </div>
            <img className = "product__image"
            src = {image}
            alt = "">
            </img>
            <button>Add to Basket</button>
            
        </div>
    )
}

export default Product
