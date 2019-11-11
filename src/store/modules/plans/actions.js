import { POST_PLAN_REQUEST } from './actionTypes';

export const postPlanRequest = ({ title, duration, price }) => ({
    type: POST_PLAN_REQUEST,
    payload: { title, duration, price },
});
