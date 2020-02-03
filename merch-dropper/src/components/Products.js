import React from 'react';
import Product from './Product';
import { connect } from 'react-redux';
import { addToCart } from '../actions';

const Products = ({ product, addToCart }) => {
    // console.log(product)
    return (
        <div>
            {product.products.map(product => (
                <Product key={product.id} product={product} addToCart={addToCart} />
            ))}
        </div>
    )
}

const mapStateToProps = state => {
    console.log('state in products', state.CartReducer.cart)
    return {
        cart: state.CartReducer.cart
    } 
}

export default connect(mapStateToProps, { addToCart })(Products);
