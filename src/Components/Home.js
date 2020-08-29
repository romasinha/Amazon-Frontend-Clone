import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className = "home">
            <img className = "home__image"
            src = "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg">
                
            </img>
            <div className = "home__row">
            <Product 
               id = "7370"
               title = "OnePlus 7T (Glacier Blue, 8GB RAM, Fluid AMOLED Display, 256GB Storage, 3800mAH Battery)"
               price = {37999}
               rating = {4}
               image = "https://images-na.ssl-images-amazon.com/images/I/71ncRs6HzyL._SL1500_.jpg"
            >

            </Product>
            <Product 
               id = "7371"
               title = "Ariel Matic Top Load Detergent Washing Powder - 4 kg with Free Detergent Powder - 2 kg"
               price = {959}
               rating = {3}
               image = "https://images-na.ssl-images-amazon.com/images/I/81fBM0t%2B2fL._SL1500_.jpg"
            >

            </Product>
            </div>
            <div className = "home__row">
            <Product 
               id = "7372"
               title = "Neocate LCP Infant Formula Powder - 400 g"
               price = {499}
               rating = {4}
               image = "https://images-na.ssl-images-amazon.com/images/I/91pFy4WXOrL._SL1500_.jpg"
            >

            </Product>
            <Product 
               id = "7373"
               title = "COMFORT WEAVE 200 TC Cotton BEDSHEET with 2 Pillow Covers - King Size, Striped, Purple"
               price = {999}
               rating = {5}
               image = "https://images-na.ssl-images-amazon.com/images/I/51xDWqHzS%2BL._SL1000_.jpg"
            >

            </Product>
            <Product 
               id = "7374"
               title = "Too Much and Never Enough: How my Family created the most dangerous man Hardcover – 14 July 2020"
               price = {575}
               rating = {4}
               image = "https://images-na.ssl-images-amazon.com/images/I/41MSTTTkMAL._SX323_BO1,204,203,200_.jpg"
            >

            </Product>
            </div>

            <div className = "home__row">
            <Product 
               id = "7375"
               title = "LG 139 cm (55 inches) 4K UHD Smart LED TV 55UM7290PTD (Ceramic BK + Dark Steel Silver) (2019 Model)"
               price = {52999}
               rating = {3}
               image = "https://images-na.ssl-images-amazon.com/images/I/81QJ2tzfzmL._SL1500_.jpg"
            >

            </Product>
            </div>

            
        </div>
    )
}

export default Home;
