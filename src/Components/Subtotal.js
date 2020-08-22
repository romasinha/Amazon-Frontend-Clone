import React from 'react';
import './Subtotal.css';
import CurrencyFormat from "react-currency-format";
import {useStateValue} from './StateProvider';
import {getBasketTotal} from '../reducer';
import { Checkbox } from '@material-ui/core';


function Subtotal() {

    const [{basket}, dispatch] = useStateValue();
    
    return (
        
        <div className = "subtotal">
            
            <CurrencyFormat 
            renderText = {(value) => (
            <>
                
                <p>
                    Subtotal : ({basket.length} items): <strong>{value}</strong> 
                </p>
            </>
            )}
            decimalScale = {2}
            value={getBasketTotal(basket)} 
            displayType={'text'} 
            thousandSeparator={true} 
            prefix={'Rs '} />
            <input type = "checkbox">Add a gift option</input>

            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
