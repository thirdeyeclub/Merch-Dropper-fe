import React from 'react';
import ShoppingCartItem from './ShoppingCartItem';
import { connect } from 'react-redux';
import { removeFromCart } from '../actions'; 
import styled from 'styled-components';

const ShoppingCart = (props) => {
    console.log('cart props', props)
    return (
        <Div>
            {props.cart.cart.map(product => (
                <ShoppingCartItem key={product.id} product={product}removeFromCart={props.removeFromCart} />
            ))}
        </Div>
    )
};

// WHY IS IT RETURNING A NUMBER 
const mapStateToProps = (state, props) => {
    console.log('state from shoppingcart', state.CartReducer.cart)
    return {
        cart: state.CartReducer
    }
}


export default connect(mapStateToProps, { removeFromCart })(ShoppingCart);


const Div = styled.div`
    background: plum;
`;