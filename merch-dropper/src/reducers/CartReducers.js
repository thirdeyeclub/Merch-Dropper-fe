import { ADD_CART_PRODUCT, REMOVE_CART_PRODUCT } from '../actions';
import initialState from './initialState';


const CartReducer = (state = initialState, action) => {
    console.log('state in cartreducer', state.cart)
    let cart = state.cart;

    switch (action.type) {
        case ADD_CART_PRODUCT: 
            cart.push(action.payload)
            return {
                ...state, 
                cart: cart,
                error: ''
            }
        case REMOVE_CART_PRODUCT:
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.product.id)
            }
        default: 
            return state;
    }
};

export default CartReducer;

// cart: state.cart.push(action.payload),
