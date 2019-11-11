import {
    GET_PLAN_BY_ID_SUCCESS,
    GET_PLAN_BY_ID_FAILURE,
    CLEAN_PLAN_ITEM,
} from './actionTypes';
import { GET_STUDENTS_REQUEST } from '../students/actionTypes';

const initialState = {
    list: [],
    item: {},
    loading: false,
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_STUDENTS_REQUEST:
            return { ...state, loading: true };

        case GET_PLAN_BY_ID_SUCCESS:
            return { ...state, item: payload.plan, loading: false };

        case GET_PLAN_BY_ID_FAILURE:
            return { ...state, loading: false };

        case CLEAN_PLAN_ITEM:
            return { ...state, item: initialState.item };

        default:
            return state;
    }
};
