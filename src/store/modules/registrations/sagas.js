import { all, takeLatest, call, put } from 'redux-saga/effects';
import api from 'services/api';
import { toast } from 'react-toastify';
import { format, parseISO } from 'date-fns';
import { getRegistrationsFailure, getRegistrationsSuccess } from './actions';
import { GET_REGISTRATIONS_REQUEST } from './actionTypes';

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

export default all([takeLatest(GET_REGISTRATIONS_REQUEST, getRegistrations)]);
