import { SIGN_IN_SUCCESS } from '../auth/actionTypes';

const initialState = {
    profile: null,
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case SIGN_IN_SUCCESS:
            return { ...state, profile: payload.user };

        default:
            return state;
    }
};
