import {
    GET_PLAN_BY_ID_REQUEST,
    GET_PLAN_BY_ID_SUCCESS,
    GET_PLAN_BY_ID_FAILURE,
    CLEAN_PLAN_ITEM,
    GET_PLANS_REQUEST,
    POST_PLAN_REQUEST,
    PUT_PLAN_REQUEST,
    GET_PLANS_SUCCESS,
    GET_PLANS_FAILURE,
    DELETE_PLAN_REQUEST,
    DELETE_PLAN_SUCCESS,
} from './actionTypes';

export const getPlansRequest = () => ({
    type: GET_PLANS_REQUEST,
});

export const getPlansSuccess = list => ({
    type: GET_PLANS_SUCCESS,
    payload: { list },
});

export const getPlansFailure = () => ({
    type: GET_PLANS_FAILURE,
});

export const deletePlanRequest = item => ({
    type: DELETE_PLAN_REQUEST,
    payload: { item },
});

export const deletePlanSuccess = id => ({
    type: DELETE_PLAN_SUCCESS,
    payload: { id },
});

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
