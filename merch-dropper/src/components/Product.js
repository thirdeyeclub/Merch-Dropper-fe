import React from 'react';
import styled from 'styled-components';


const Product = ({ product, addToCart }) => {

    return (
        <div>
            <Div className='product-container'>
                <h3>{product.title}</h3>
                <Img src={product.image} />
                <h3>${product.price}</h3>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
            </Div>
        </div>
    )
};


export default Product;


const Div = styled.div`
    border: 1px solid black;
    width: 400px;
    margin: 10px auto;
    padding: 10px;
`;

const Img = styled.img`
    width: 200px;
    height: 300px;
`;