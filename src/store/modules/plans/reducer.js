import {
    GET_PLAN_BY_ID_REQUEST,
    GET_PLAN_BY_ID_SUCCESS,
    GET_PLAN_BY_ID_FAILURE,
    GET_PLANS_REQUEST,
    GET_PLANS_SUCCESS,
    GET_PLANS_FAILURE,
    CLEAN_PLAN_ITEM,
    DELETE_PLAN_REQUEST,
    DELETE_PLAN_SUCCESS,
    DELETE_PLAN_FAILURE,
} from './actionTypes';

const initialState = {
    list: [],
    item: {},
    loading: false,
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_PLANS_REQUEST:
            return { ...state, loading: true };

        case GET_PLANS_SUCCESS:
            return { ...state, list: payload.list, loading: false };

        case GET_PLANS_FAILURE:
            return { ...state, loading: false };

        case DELETE_PLAN_REQUEST:
            return { ...state, loading: true };

        case DELETE_PLAN_SUCCESS:
            return {
                ...state,
                list: state.list.filter(item => item.id !== payload.id),
                loading: false,
            };

        case DELETE_PLAN_FAILURE:
            return { ...state, loading: false };

        case GET_PLAN_BY_ID_REQUEST:
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
