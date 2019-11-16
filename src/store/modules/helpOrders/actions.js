import {
    GET_HELP_ORDERS_REQUEST,
    GET_HELP_ORDERS_SUCCESS,
    GET_HELP_ORDERS_FAILURE,
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
