import {
    GET_PLAN_BY_ID_REQUEST,
    GET_PLAN_BY_ID_SUCCESS,
    GET_PLAN_BY_ID_FAILURE,
    CLEAN_PLAN_ITEM,
    POST_PLAN_REQUEST,
    PUT_PLAN_REQUEST,
} from './actionTypes';

export const getPlanByIdRequest = id => ({
    type: GET_PLAN_BY_ID_REQUEST,
    payload: { id },
});

export const getPlanByIdSuccess = plan => ({
    type: GET_PLAN_BY_ID_SUCCESS,
    payload: { plan },
});

export const getPlanByIdFailure = () => ({
    type: GET_PLAN_BY_ID_FAILURE,
});

export const cleanPlanItem = () => ({
    type: CLEAN_PLAN_ITEM,
});

export const postPlanRequest = ({ title, duration, price }) => ({
    type: POST_PLAN_REQUEST,
    payload: { title, duration, price },
});

export const putPlanRequest = ({ id, title, price, duration }) => ({
    type: PUT_PLAN_REQUEST,
    payload: { id, title, price, duration },
});
