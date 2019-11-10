import { all, takeLatest, call, put } from 'redux-saga/effects';

import api from 'services/api';
import { GET_STUDENTS_REQUEST } from './actionTypes';
import { getStudentsSuccess } from './actions';

function* setStudents({ payload }) {
    const { search } = payload;

    const response = yield call(api.get, 'students', {
        params: { q: search },
    });

    yield put(getStudentsSuccess(response.data));
}

export default all([takeLatest(GET_STUDENTS_REQUEST, setStudents)]);
