import React from 'react'
import {useStateValue} from './StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {

    const [{basket}] = useStateValue();

    return (
        <div>
            <div className = "checkout">
            
            <img 
            className = "checkout__ad"
            src = "https://d2slcw3kip6qmk.cloudfront.net/marketing/press/images/template-gallery/banner-ad2-728x90.jpeg" 
            alt = "" />

            {basket?.length === 0 ? (
                <div>
                    <h2>Your Shopping Cart is empty.</h2>
                    <p>You have no items in your cart. Please go back to your home-page and add the products you would like to buy in the cart.</p>
                </div>
            ): (
                <div>
                    <h2 className = "checkout__title">Your cart contains some items.
                     </h2>
                    {/*List all the items in the cart */}
                    {basket.map(item => (
                        <CheckoutProduct
                        item = {item.id}
                        title = {item.title}
                        image = {item.image}
                        price = {item.price}
                        rating = {item.rating} />
                    ))}
                </div>
            )}
            
            
            
            </div>
           
        </div>
    )
}

export default Checkout
