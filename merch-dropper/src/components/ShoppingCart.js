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

// WHY IS IT RETURNING A NUMBER 
const mapStateToProps = (state, props) => {
    // console.log('state from shoppingcart', state.CartReducer)
    return {
        cart: state.CartReducer
    }
}


export default connect(mapStateToProps, { removeFromCart })(ShoppingCart);


const Div = styled.div`
    background: plum;
`;