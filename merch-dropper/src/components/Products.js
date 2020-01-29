import React from 'react';
import Product from './Product';

const Products = (data) => {
    return (
        <div>
            {data.props.products.map(product => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    )
}

export default Products;