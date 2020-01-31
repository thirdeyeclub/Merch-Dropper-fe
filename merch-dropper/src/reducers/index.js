import { combineReducers } from 'redux';

import RegisterReducer from './RegisterReducers';
import LoginReducer from './LoginReducers';
import CartReducer from './CartReducers';
import ProductReducer from './ProductReducers';

const rootReducer = combineReducers({
    RegisterReducer,
    LoginReducer,
    CartReducer,
    ProductReducer
});

export default rootReducer;