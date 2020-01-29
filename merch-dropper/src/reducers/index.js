import { combineReducers } from 'redux';

import RegisterReducer from './RegisterReducers';
import LoginReducer from './LoginReducers';
import CartReducer from './CartReducers';

export default combineReducers({
    RegisterReducer,
    LoginReducer,
    CartReducer
});