
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const addToCart = product => {
    return { 
        type: ADD_PRODUCT, 
        payload: product 
    }
};

export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const removeFromCart = product => {
    return {
        type: REMOVE_PRODUCT,
        payload: product
    }
};

