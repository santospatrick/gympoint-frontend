import { all, takeLatest, call, put } from 'redux-saga/effects';
import api from 'services/api';
import { toast } from 'react-toastify';
import { format, parseISO } from 'date-fns';
import {
    getRegistrationsFailure,
    getRegistrationsSuccess,
    deleteRegistrationSuccess,
} from './actions';
import {
    GET_REGISTRATIONS_REQUEST,
    DELETE_REGISTRATION_REQUEST,
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

export default all([
    takeLatest(GET_REGISTRATIONS_REQUEST, getRegistrations),
    takeLatest(DELETE_REGISTRATION_REQUEST, deleteRegistration),
]);
