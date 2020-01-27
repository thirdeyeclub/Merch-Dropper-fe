// import axios from 'axios';
// import { axiosWithAuth } from '../utils/axiosWithAuth';

export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const postUser = (credentials) => dispatch => {
    dispatch({ type: REGISTER_START })

}