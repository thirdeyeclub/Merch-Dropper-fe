import React from 'react';
import ShoppingCartItem from './ShoppingCartItem';
import { connect } from 'react-redux';
import { removeFromCart } from '../actions'; 
import styled from 'styled-components';

const ShoppingCart = (props) => {

    return (
        <Div>
            <ShoppingCartItem />
        </Div>
    )
};

const mapStateToProps = (state, props) => {
    console.log('state from shoppingcart', state)
    return {
        cart: state.cart,
        error: state.error
    }
}


export default connect(mapStateToProps, { removeFromCart })(ShoppingCart);


const Div = styled.div`
    background: plum;
`;