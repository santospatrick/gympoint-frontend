import { all, call, put, takeLatest } from 'redux-saga/effects';
import api from 'services/api';
import { toast } from 'react-toastify';

import { GET_HELP_ORDERS_REQUEST } from './actionTypes';
import { getHelpOrdersSuccess } from './actions';

function* getHelpOrders() {
    try {
        const response = yield call(api.get, 'students/help-orders/available');

        yield put(getHelpOrdersSuccess(response.data));
    } catch (error) {
        yield put(getHelpOrdersSuccess());
        toast.error('Não foi possível carregar pedidos de auxílio');
    }
}

export default all([takeLatest(GET_HELP_ORDERS_REQUEST, getHelpOrders)]);
