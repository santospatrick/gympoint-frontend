import { POST_PLAN_REQUEST, PUT_PLAN_REQUEST } from './actionTypes';

export const postPlanRequest = ({ title, duration, price }) => ({
    type: POST_PLAN_REQUEST,
    payload: { title, duration, price },
});

export const putPlanRequest = ({ id, title, price, duration }) => ({
    type: PUT_PLAN_REQUEST,
    payload: { id, title, price, duration },
});
