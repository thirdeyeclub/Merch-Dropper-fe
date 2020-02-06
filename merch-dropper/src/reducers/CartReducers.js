import { ADD_CART_PRODUCT, REMOVE_CART_PRODUCT, INCREASE_QTY, DECREASE_QTY } from '../actions';
// import initialState from './initialState';


const CartReducer = (state={ cart: [], cartQuantity: 0 }, action) => {
    let cart = state.cart;
    console.log('current cart state', cart)

    switch (action.type) {
        case ADD_CART_PRODUCT: 
            let newQuantity = state.cartQuantity += 1;
            cart.push({ ...action.payload, cartQuantity: newQuantity })
            return {
                ...state, 
                cart: cart,
                error: ''
            }
        case REMOVE_CART_PRODUCT:
            return {
                ...state,
                cart: cart.filter(item => item.id !== action.payload)
            }
        case INCREASE_QTY:
            console.log('reducer called', action); 
            return {
                ...state,
                quantity: action.quantity + 1
            };
        case DECREASE_QTY: 
            if (state.quantity > 1) {
                return {
                ...state,
                quantity: action.quantity - 1
                };
            }
        default: 
            return state;
    }
};

export default CartReducer;