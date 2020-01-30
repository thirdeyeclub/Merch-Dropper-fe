import { ADD_CART_PRODUCT, REMOVE_CART_PRODUCT } from '../actions';

const initialState = {
    cart: [],
    error: '',
}

const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CART_PRODUCT: 
            return {
                ...state, 
                cart: action.payload,
                error: ''
            }
        case REMOVE_CART_PRODUCT:
            return state.filter(p => p.id !== action.product.id)
        default: 
            return state;
    }
};

export default CartReducer;