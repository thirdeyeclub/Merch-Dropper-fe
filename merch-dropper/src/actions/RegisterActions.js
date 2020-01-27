import axios from 'axios';

export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const postUser = (registerInfo) => dispatch => {
    dispatch({ type: REGISTER_START })
    axios.post('DEPLOYEDURL', registerInfo)
        .then(res => {
            console.log(res);
            dispatch({ type: REGISTER_SUCCESS, payload: res.data })
        })
        .cactch(err => {
            console.log(err)
            dispatch({ type: REGISTER_FAILURE, payload: err })
        })
};