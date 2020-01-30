import { combineReducers } from 'redux';

import RegisterReducer from './RegisterReducers';
import LoginReducer from './LoginReducers';
import CartReducer from './CartReducers';
import ProductReducer from './ProductReducers';

export default combineReducers({
    RegisterReducer,
    LoginReducer,
    CartReducer,
    ProductReducer
});