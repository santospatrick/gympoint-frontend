import { all, call, put, takeLatest } from 'redux-saga/effects';
import api from 'services/api';
import { toast } from 'react-toastify';

import { GET_HELP_ORDERS_REQUEST, POST_ANSWER_REQUEST } from './actionTypes';
import {
    getHelpOrdersSuccess,
    postAnswerSuccess,
    postAnswerFailure,
} from './actions';

function* getHelpOrders() {
    try {
        const response = yield call(api.get, 'students/help-orders/available');

        yield put(getHelpOrdersSuccess(response.data));
    } catch (error) {
        yield put(getHelpOrdersSuccess());
        toast.error('Não foi possível carregar pedidos de auxílio');
    }
}

function* postAnswer({ payload }) {
    const { id, answer, student } = payload;

    try {
        yield call(api.post, `/help-orders/${id}/answer`, { answer });
        yield put(postAnswerSuccess(id));
        toast.success(`Pergunta de: "${student}" respondida do sucesso!`);
    } catch (error) {
        yield put(postAnswerFailure());
        toast.success('Não foi possível responder pergunta');
    }
}

export default all([
    takeLatest(GET_HELP_ORDERS_REQUEST, getHelpOrders),
    takeLatest(POST_ANSWER_REQUEST, postAnswer),
]);
