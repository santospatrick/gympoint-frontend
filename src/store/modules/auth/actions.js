import {
    SIGN_IN_REQUEST,
    SIGN_IN_SUCCESS,
    SIGN_IN_FAILURE,
} from './actionTypes';

export const signInRequest = ({ email, password }) => ({
    type: SIGN_IN_REQUEST,
    payload: { email, password },
});

export const signInSuccess = ({ token, user }) => ({
    type: SIGN_IN_SUCCESS,
    payload: { token, user },
});

export const signInFailure = () => ({
    type: SIGN_IN_FAILURE,
});
