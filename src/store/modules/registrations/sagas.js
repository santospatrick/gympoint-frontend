import { all, takeLatest, call, put } from 'redux-saga/effects';
import api from 'services/api';
import { toast } from 'react-toastify';
import { format, parseISO } from 'date-fns';
import history from 'services/history';
import {
    getRegistrationsFailure,
    getRegistrationsSuccess,
    deleteRegistrationSuccess,
    postRegistrationSuccess,
    postRegistrationFailure,
} from './actions';
import {
    GET_REGISTRATIONS_REQUEST,
    DELETE_REGISTRATION_REQUEST,
    POST_REGISTRATION_REQUEST,
} from './actionTypes';

function* getRegistrations() {
    try {
        const response = yield call(api.get, 'registrations');

        const data = response.data.map(item => ({
            ...item,
            formattedStartDate: format(
                parseISO(item.start_date),
                "d 'de' MM 'de' yyyy",
            ),
            formattedEndDate: format(
                parseISO(item.end_date),
                "d 'de' MM 'de' yyyy",
            ),
        }));

        yield put(getRegistrationsSuccess(data));
    } catch (error) {
        toast.error('Não foi possível carregar matrículas');
        yield put(getRegistrationsFailure());
    }
}

function* deleteRegistration({ payload }) {
    const { item } = payload;
    const { id, student } = item;
    const { name } = student;

    try {
        yield call(api.delete, `registrations/${id}`);
        yield put(deleteRegistrationSuccess(id));
        toast.success(`Matrícula de: "${name}" deletada com sucesso!`);
    } catch (error) {
        toast.error('Não foi possível deletar matrícula');
    }
}

function* postRegistration({ payload }) {
    const { start_date, student_id, plan_id } = payload;

    try {
        yield call(api.post, 'registrations', {
            start_date,
            student_id,
            plan_id,
        });
        yield put(postRegistrationSuccess());

        toast.success('Matrícula cadastrada com sucesso!');
        history.push('/registrations');
    } catch (error) {
        yield put(postRegistrationFailure());
        toast.error('Não foi possível cadastrar matrícula');
    }
}

export default all([
    takeLatest(GET_REGISTRATIONS_REQUEST, getRegistrations),
    takeLatest(DELETE_REGISTRATION_REQUEST, deleteRegistration),
    takeLatest(POST_REGISTRATION_REQUEST, postRegistration),
]);
