import React from 'react';
import Product from './Product';
import { connect } from 'react-redux';
import { addToCart } from '../actions';

const Products = (data) => {
    // console.log(data)
    return (
        <div>
            {data.props.products.map(product => (
                <Product key={product.id} product={product} props={data} addToCart={addToCart} />
            ))}
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state.CartReducer.cart)
    return {
        cart: state.CartReducer.cart
    } 
}

export default connect(mapStateToProps, { addToCart })(Products);
