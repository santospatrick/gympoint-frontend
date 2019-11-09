import {
    SIGN_IN_REQUEST,
    SIGN_IN_SUCCESS,
    SIGN_IN_FAILURE,
} from './actionTypes';

const initialState = {
    token: null,
    signed: false,
    loading: false,
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case SIGN_IN_REQUEST:
            return { ...state, loading: true };

        case SIGN_IN_SUCCESS:
            return {
                ...state,
                token: payload.token,
                signed: true,
                loading: false,
            };

        case SIGN_IN_FAILURE:
            return { ...state, loading: false };

        default:
            return state;
    }
};
