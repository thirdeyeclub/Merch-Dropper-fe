import { ADD_PRODUCT, REMOVE_PRODUCT, ADD_PRODUCT_PRICE, REMOVE_PRODUCT_PRICE } from '../actions';
import initialState from '../dummyData';

export const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT: 
            return [...state, action.product]
        case REMOVE_PRODUCT:
            return state.filter(product => product.id !== action.product.id)
        default: 
            return state;
    }
};

export default CartReducer;