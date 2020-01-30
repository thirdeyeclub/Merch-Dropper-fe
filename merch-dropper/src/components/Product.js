import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { addToCart } from '../actions';

const Product = props => {
    console.log(props)

    const handleSubmit = event => {
        event.preventDefault();
        alert('clicked')
        props.addToCart(props.product)
    };

    return (
        <div>
            <Div className='product-container'>
                <h3>{props.product.title}</h3>
                <Img src={props.product.image} />
                <h3>${props.product.price}</h3>
                <button onClick={handleSubmit}>Add to Cart</button>
            </Div>
        </div>
    )
};


function mapStateToProps(state, props) {
    return {
        cart: state.products
    }
};

function mapDispatchToProps(dispatch) {
    return {
        addToCart: product => dispatch(addToCart(product))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);


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