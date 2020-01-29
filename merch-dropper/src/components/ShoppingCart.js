import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../actions/CartActions';

const ShoppingCart = props =>{
    console.log(props)

    return (
        <h1>ShoppingCart Component</h1>
    )
};

export default ShoppingCart;