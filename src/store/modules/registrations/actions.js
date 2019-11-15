import {
    GET_REGISTRATIONS_REQUEST,
    GET_REGISTRATIONS_SUCCESS,
    GET_REGISTRATIONS_FAILURE,
} from './actionTypes';

export const getRegistrationsRequest = () => ({
    type: GET_REGISTRATIONS_REQUEST,
});

export const getRegistrationsSuccess = list => ({
    type: GET_REGISTRATIONS_SUCCESS,
    payload: { list },
});

export const getRegistrationsFailure = () => ({
    type: GET_REGISTRATIONS_FAILURE,
});
