import { all, takeLatest, call, put } from 'redux-saga/effects';

import api from 'services/api';
import { toast } from 'react-toastify';
import history from 'services/history';
import { GET_STUDENTS_REQUEST, POST_STUDENT_REQUEST } from './actionTypes';
import {
    getStudentsSuccess,
    getStudentsFailure,
    postStudentSuccess,
    postStudentFailure,
} from './actions';

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

function* postStudent({ payload }) {
    try {
        const { student } = payload;

        const response = yield call(api.post, 'students', student);

        yield put(postStudentSuccess(response.data));

        toast.success(`Aluno: "${student.name}" cadastrado com sucesso!`);

        history.push('/students');
    } catch (error) {
        // TODO: adicionar i18n
        const message = {
            'User already exists': 'Usuário já existe',
        };

        if (
            Object.prototype.hasOwnProperty.call(
                message,
                error.response.data.error,
            )
        ) {
            toast.error(message[error.response.data.error]);
        } else {
            toast.error('Não foi possível cadastrar aluno');
        }

        yield put(postStudentFailure());
    }
}

export default all([
    takeLatest(GET_STUDENTS_REQUEST, setStudents),
    takeLatest(POST_STUDENT_REQUEST, postStudent),
]);
