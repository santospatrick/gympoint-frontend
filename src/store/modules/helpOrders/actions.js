import {
    GET_HELP_ORDERS_REQUEST,
    GET_HELP_ORDERS_SUCCESS,
    GET_HELP_ORDERS_FAILURE,
    POST_ANSWER_REQUEST,
    POST_ANSWER_SUCCESS,
    POST_ANSWER_FAILURE,
} from './actionTypes';

export const getHelpOrdersRequest = () => ({
    type: GET_HELP_ORDERS_REQUEST,
});

export const getHelpOrdersSuccess = list => ({
    type: GET_HELP_ORDERS_SUCCESS,
    payload: { list },
});

export const getHelpOrdersFailure = () => ({
    type: GET_HELP_ORDERS_FAILURE,
});

export const postAnswerRequest = ({ id, answer, student }) => ({
    type: POST_ANSWER_REQUEST,
    payload: { id, answer, student },
});

export const postAnswerSuccess = id => ({
    type: POST_ANSWER_SUCCESS,
    payload: { id },
});

export const postAnswerFailure = () => ({
    type: POST_ANSWER_FAILURE,
});
