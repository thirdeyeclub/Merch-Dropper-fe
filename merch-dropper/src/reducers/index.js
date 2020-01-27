import { combineReducers } from 'redux';

import RegisterReducer from './RegisterReducers';
import LoginReducer from './LoginReducers';

export default combineReducers({
    RegisterReducer,
    LoginReducer
});