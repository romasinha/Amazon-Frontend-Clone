import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {useStateValue} from './StateProvider';

function Header() {
    const [{basket}] = useStateValue();

    

    
    return (
        <nav className = "header">
            {/*Logo*/}

            <Link to = "/home">
            <img className = "header__logo" 
            src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png" alt = "">
            </img>
            </Link>

            {/*Search*/}

            <div className = "header__search">
            <input type="text" className = "header__searchInput">
            </input>
            <SearchIcon className = "header__searchIcon"></SearchIcon>
            </div>
            
            {/*Links*/}
            <div className = "header__nav">
            <Link to = "/login" className = "header__link">
                <div className = "header__option">
                    <span className = "header__optionTop">Hello, Roma</span>
                    <span className = "header__optionBottom">Sign In</span>
                </div>
            </Link>

            <Link to = "/" className = "header__link">
                <div className = "header__option">
                    <span className = "header__optionTop" >Returns</span>
                    <span className = "header__optionBottom">& Orders</span>
                </div>
            </Link>

            <Link to= "/" className = "header__link">
                <div className = "header__option">
                    <span className = "header__optionTop">Your</span>
                    <span className = "header__optionBottom">Prime</span>
                </div>
            </Link>

            <Link to = "/checkout" className = "header__link">
                <div className = "header__optionBasket">
                   <ShoppingBasketIcon/>
            <span className = "header__optionBottom header__basketCount">{basket.length}</span>
                </div>
            </Link>
            
            </div>

            {/*Basket*/}
            
        </nav>
    )
}

export default Header
