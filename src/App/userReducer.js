// src/reducers/userReducer.js
import { REGISTER_USER, REGISTER_ERROR } from '../App/userReducer';

const initialState = {
    user: null,
    error: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_USER:
            return { ...state, user: action.payload, error: null };
        case REGISTER_ERROR:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

export default userReducer;
