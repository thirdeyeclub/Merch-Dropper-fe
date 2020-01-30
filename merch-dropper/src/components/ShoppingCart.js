import React from 'react';
import ShoppingCartItem from './ShoppingCartItem';
import styled from 'styled-components';

const ShoppingCart = (props) =>{
    console.log(props)

    return (
        <Div>
            <h1>ShoppingCart Component</h1>
        </Div>
    )
};

export default ShoppingCart;

const Div = styled.div`
    background: plum;
`;