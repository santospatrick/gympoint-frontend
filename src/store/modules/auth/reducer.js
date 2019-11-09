const initialState = {
    token: null,
    signed: false,
    loading: false,
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case '@auth/SIGN_IN_REQUEST':
            return { ...state, ...payload };

        default:
            return state;
    }
};
