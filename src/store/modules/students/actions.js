import {
    GET_STUDENTS_REQUEST,
    GET_STUDENTS_SUCCESS,
    GET_STUDENTS_FAILURE,
    POST_STUDENT_REQUEST,
    POST_STUDENT_SUCCESS,
    POST_STUDENT_FAILURE,
    PUT_STUDENT_REQUEST,
} from './actionTypes';

export const getStudentsRequest = search => ({
    type: GET_STUDENTS_REQUEST,
    payload: { search },
});

export const getStudentsSuccess = list => ({
    type: GET_STUDENTS_SUCCESS,
    payload: { list },
});

export const getStudentsFailure = () => ({
    type: GET_STUDENTS_FAILURE,
});

export const postStudentRequest = student => ({
    type: POST_STUDENT_REQUEST,
    payload: { student },
});

export const postStudentSuccess = student => ({
    type: POST_STUDENT_SUCCESS,
    payload: { student },
});

export const postStudentFailure = () => ({
    type: POST_STUDENT_FAILURE,
});

export const putStudentRequest = student => ({
    type: PUT_STUDENT_REQUEST,
    payload: { student },
});
