import { all, takeLatest, call, put } from 'redux-saga/effects';

import api from 'services/api';
import { toast } from 'react-toastify';
import history from 'services/history';
import {
    GET_STUDENTS_REQUEST,
    POST_STUDENT_REQUEST,
    PUT_STUDENT_REQUEST,
    DELETE_STUDENT_REQUEST,
} from './actionTypes';
import {
    getStudentsSuccess,
    getStudentsFailure,
    postStudentSuccess,
    postStudentFailure,
    deleteStudentSuccess,
    deleteStudentFailure,
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

function* putStudent({ payload }) {
    try {
        const { student } = payload;

        yield api.put('students', student);
        toast.success(`Estudante: "${student.name}" atualizado com sucesso!`);
    } catch (error) {
        toast.error('Não foi possível atualizar estudante');
    }
}

function* deleteStudent({ payload }) {
    const { student } = payload;
    const { id, name } = student;

    try {
        yield call(api.delete, `students/${id}`);
        yield put(deleteStudentSuccess(id));
        toast.success(`Estudante: "${name}" deletado com sucesso!`);
    } catch (error) {
        yield put(deleteStudentFailure());
        toast.error('Não foi possível deletar estudante');
    }
}

export default all([
    takeLatest(GET_STUDENTS_REQUEST, setStudents),
    takeLatest(POST_STUDENT_REQUEST, postStudent),
    takeLatest(PUT_STUDENT_REQUEST, putStudent),
    takeLatest(DELETE_STUDENT_REQUEST, deleteStudent),
]);
