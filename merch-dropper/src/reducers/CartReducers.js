import { ADD_CART_PRODUCT, REMOVE_CART_PRODUCT } from '../actions';
import initialState from './initialState';


const CartReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_CART_PRODUCT: 
            return {
                ...state, 
                cart: state.cart.concat(action.payload),
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