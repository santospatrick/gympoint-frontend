import { all, takeLatest, call, put } from 'redux-saga/effects';

import api from 'services/api';
import { toast } from 'react-toastify';
import { GET_STUDENTS_REQUEST } from './actionTypes';
import { getStudentsSuccess, getStudentsFailure } from './actions';

function* setStudents({ payload }) {
    try {
        const { search } = payload;

        const response = yield call(api.get, 'students', {
            params: { q: search },
        });

        yield put(getStudentsSuccess(response.data));
    } catch (error) {
        toast.error('Não foi possível listar alunos');
        yield put(getStudentsFailure());
    }
}

export default all([takeLatest(GET_STUDENTS_REQUEST, setStudents)]);
