import { all, takeLatest, call, put } from 'redux-saga/effects';
import api from 'services/api';
import { toast } from 'react-toastify';
import { parseISO } from 'date-fns';
import { getRegistrationsFailure, getRegistrationsSuccess } from './actions';
import { GET_REGISTRATIONS_REQUEST } from './actionTypes';

function* getRegistrations() {
    try {
        const response = yield call(api.get, 'registrations');

        put(getRegistrationsSuccess(response.data));
    } catch (error) {
        toast.error('Não foi possível carregar matrículas');
        put(getRegistrationsFailure());
    }
}

export default all([takeLatest(GET_REGISTRATIONS_REQUEST, getRegistrations)]);
