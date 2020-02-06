import React from 'react';
import ShoppingCartItem from './ShoppingCartItem';
import { connect } from 'react-redux';
import { removeFromCart, increaseQty, decreaseQty } from '../actions'; 
import styled from 'styled-components';


const ShoppingCart = (props) => {
    console.log('cart props', props.cart.cart)
    
    return (
        <Div className='cart-container'>
            {props.cart.cart.map(product => (
                <ShoppingCartItem 
                    key={product.id} 
                    product={product} 
                    quantity={product.cartQuantity}
                    increaseQty={props.increaseQty} 
                    decreaseQty={props.decreaseQty}
                    removeFromCart={props.removeFromCart} 
                />
            ))}
            <h3>SubTotal: $</h3>
        </Div>
    )
};

const mapStateToProps = (state, props) => {
    console.log('state from cart', state.CartReducer.cart)
    return {
        cart: state.CartReducer
    }
}


export default connect(mapStateToProps, { removeFromCart, increaseQty, decreaseQty })(ShoppingCart);


const Div = styled.div`
    border: 2px solid gray;
`;
