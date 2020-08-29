import React from 'react';
import "./Product.css";
import {useStateValue} from './StateProvider';

function Product({id, title, price, rating, image}) {

    const [{basket}, dispatch] = useStateValue();

    //Add item to the basket...
    const addToBasket = () =>{
        //Add item to the basket
        dispatch({
            type: "ADD_TO_BASKET",
            item:{
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };
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
            <button onClick = {addToBasket}>Add to Basket</button>
            
        </div>
    )
}

export default Product
