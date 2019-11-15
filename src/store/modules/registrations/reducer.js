import {
    GET_REGISTRATIONS_REQUEST,
    GET_REGISTRATIONS_SUCCESS,
    GET_REGISTRATIONS_FAILURE,
    DELETE_REGISTRATION_SUCCESS,
    DELETE_REGISTRATION_REQUEST,
    DELETE_REGISTRATION_FAILURE,
} from './actionTypes';

const initialState = {
    list: [],
    loading: false,
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_REGISTRATIONS_REQUEST:
            return { ...state, loading: true };

        case GET_REGISTRATIONS_SUCCESS:
            return { ...state, list: payload.list, loading: false };

        case GET_REGISTRATIONS_FAILURE:
            return { ...state, loading: false };

        case DELETE_REGISTRATION_REQUEST:
            return { ...state, loading: true };

        case DELETE_REGISTRATION_SUCCESS:
            return {
                ...state,
                list: state.list.filter(item => item.id !== payload.id),
                loading: false,
            };

        case DELETE_REGISTRATION_FAILURE:
            return { ...state, loading: false };

        default:
            return state;
    }
};
