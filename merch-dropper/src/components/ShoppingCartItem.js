import React from 'react';


const ShoppingCartItem = (props) => {
    console.log('cart item', props)
    return (
        <div>
            {/* <div className='product-container'>
                <h3>{props.product.title}</h3>
                <img src={props.product.image} />
                <h3>${props.product.price}</h3>
                <button onClick={() => props.removeFromCart(props.product)}>Remove Item</button>
            </div> */}
            <h1>shopping cart item</h1>
        </div>
    )
}



export default ShoppingCartItem;