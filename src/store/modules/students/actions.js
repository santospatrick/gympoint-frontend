import {
    GET_STUDENTS_REQUEST,
    GET_STUDENTS_SUCCESS,
    GET_STUDENTS_FAILURE,
} from './actionTypes';

export const getStudentsRequest = search => ({
    type: GET_STUDENTS_REQUEST,
    payload: { search },
});

export const getStudentsSuccess = list => ({
    type: GET_STUDENTS_SUCCESS,
    payload: { list },
});

export const getStudentsFailure = list => ({
    type: GET_STUDENTS_FAILURE,
    payload: { list },
});
