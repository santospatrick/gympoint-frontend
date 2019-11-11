import { all, takeLatest, call, put } from 'redux-saga/effects';

import api from 'services/api';
import { toast } from 'react-toastify';
import history from 'services/history';
import {
    POST_PLAN_REQUEST,
    PUT_PLAN_REQUEST,
    GET_PLAN_BY_ID_REQUEST,
} from './actionTypes';
import { getPlanByIdSuccess, getPlanByIdFailure } from './actions';

function* getPlanById({ payload }) {
    const { id } = payload;
    try {
        const response = yield call(api.get, `plans/${id}`);
        yield put(getPlanByIdSuccess(response.data));
    } catch (error) {
        toast.error('Não foi possível buscar plano');
        yield put(getPlanByIdFailure());
    }
}

function* postPlan({ payload }) {
    try {
        const { title, duration, price } = payload;

        yield call(api.post, 'plans', { title, duration, price });

        toast.success('Plano cadastrado com sucesso!');
        history.push('/plans');
    } catch (error) {
        toast.error('Não foi possível cadastrar plano');
    }
}

function* putPlan({ payload }) {
    try {
        const { id, title, price, duration } = payload;

        yield call(api.put, `plans/${id}`, { title, duration, price });
        toast.success(`Plano: "${title}" atualizado com sucesso!`);
    } catch (error) {
        toast.error('Não foi possível editar plano');
    }
}

export default all([
    takeLatest(GET_PLAN_BY_ID_REQUEST, getPlanById),
    takeLatest(POST_PLAN_REQUEST, postPlan),
    takeLatest(PUT_PLAN_REQUEST, putPlan),
]);
