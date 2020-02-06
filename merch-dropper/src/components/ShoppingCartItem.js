import React from 'react';


const ShoppingCartItem = (props) => {
    console.log('cartItem props', props)
    return (
        <div className='product-container'>
            <img src={props.product.image} />
            <ul>
                <li>{props.product.title}</li>
                <li>${props.product.price}</li>
                <li>Quantity: {props.product.cartQuantity}</li>
            </ul>
            <button onClick={() => props.increaseQty(props.product.cartQuantity)}>+</button>
            <button onClick={() => props.decreaseQty(props)}>-</button>
            <button onClick={() => props.removeFromCart(props.product)}>Remove Item</button>
        </div>
    )
}



export default ShoppingCartItem;
