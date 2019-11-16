import {
    GET_HELP_ORDERS_SUCCESS,
    GET_HELP_ORDERS_REQUEST,
    GET_HELP_ORDERS_FAILURE,
    POST_ANSWER_SUCCESS,
    POST_ANSWER_REQUEST,
    POST_ANSWER_FAILURE,
} from './actionTypes';

const initialState = {
    list: [],
    loading: false,
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_HELP_ORDERS_REQUEST:
            return { ...state, loading: true };

        case GET_HELP_ORDERS_SUCCESS:
            return { ...state, list: payload.list, loading: false };

        case GET_HELP_ORDERS_FAILURE:
            return { ...state, loading: false };

        case POST_ANSWER_REQUEST:
            return { ...state, loading: true };

        case POST_ANSWER_SUCCESS:
            return {
                ...state,
                list: state.list.filter(item => item.id !== payload.id),
            };

        case POST_ANSWER_FAILURE:
            return { ...state, loading: false };

        default:
            return state;
    }
};
