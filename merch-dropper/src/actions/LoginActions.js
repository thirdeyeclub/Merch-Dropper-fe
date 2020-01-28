import { axiosWithAuth } from '../utils/axiosWithAuth';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const userLogin = (loginInfo) => dispatch => {
    dispatch({ type: LOGIN_START })
    axiosWithAuth()
        .post('/login', loginInfo)
        .then(res => {
            console.log(res)
            localStorage.setItem('token', res.data.token)
            dispatch({ type: LOGIN_SUCCESS, payload: res.data })
        })
        .catch(err=> {
            console.log(err)
            dispatch({ type: LOGIN_FAILURE, payload: err })
        })
};