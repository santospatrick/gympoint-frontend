import {
    GET_STUDENTS_REQUEST,
    GET_STUDENTS_SUCCESS,
    GET_STUDENTS_FAILURE,
    POST_STUDENT_REQUEST,
    POST_STUDENT_SUCCESS,
    POST_STUDENT_FAILURE,
    DELETE_STUDENT_REQUEST,
    DELETE_STUDENT_SUCCESS,
    DELETE_STUDENT_FAILURE,
} from './actionTypes';

const initialState = {
    list: [],
    loading: false,
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_STUDENTS_REQUEST:
            return { ...state, loading: true };

        case GET_STUDENTS_SUCCESS:
            return { ...state, list: payload.list, loading: false };

        case GET_STUDENTS_FAILURE:
            return { ...state, loading: false };

        case POST_STUDENT_REQUEST:
            return { ...state, loading: true };

        case POST_STUDENT_SUCCESS:
            return { ...state, loading: false };

        case POST_STUDENT_FAILURE:
            return { ...state, loading: false };

        case DELETE_STUDENT_REQUEST:
            return { ...state, loading: true };

        case DELETE_STUDENT_SUCCESS:
            return {
                ...state,
                list: state.list.filter(item => item.id !== payload.id),
                loading: false,
            };

        case DELETE_STUDENT_FAILURE:
            return { ...state, loading: false };

        default:
            return state;
    }
};
