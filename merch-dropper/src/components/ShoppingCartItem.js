import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../actions';
import styled from 'styled-components';

const ShoppingCartItem = (props) => {
    console.log(props)
    return (
        <div>
            <div className='product-container'>
                <h3>{props.product.title}</h3>
                <img src={props.product.image} />
                <h3>${props.product.price}</h3>
                <button onClick={() => props.removeFromCart(props.product)}>Remove Item</button>
            </div>
        </div>
    )
}

export default ShoppingCartItem;