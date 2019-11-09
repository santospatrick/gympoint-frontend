import { SIGN_IN_REQUEST, SIGN_IN_SUCCESS } from './actionTypes';

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

        default:
            return state;
    }
};
