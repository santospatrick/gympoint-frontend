import { all, takeLatest, call, put } from 'redux-saga/effects';

import api from 'services/api';
import { toast } from 'react-toastify';
import history from 'services/history';
import { formatPrice } from 'util/format';
import {
    POST_PLAN_REQUEST,
    PUT_PLAN_REQUEST,
    GET_PLAN_BY_ID_REQUEST,
    GET_PLANS_REQUEST,
    DELETE_PLAN_REQUEST,
} from './actionTypes';

import {
    getPlanByIdSuccess,
    getPlanByIdFailure,
    getPlansSuccess,
    getPlansFailure,
    deletePlanSuccess,
} from './actions';

function* getPlans() {
    try {
        const response = yield call(api.get, 'plans');
        const data = response.data.map(item => ({
            ...item,
            formattedPrice: formatPrice(item.price),
        }));
        yield put(getPlansSuccess(data));
    } catch (error) {
        yield put(getPlansFailure());
        toast.error('Não foi possível buscar planos');
    }
}

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

function* deletePlan({ payload }) {
    const { item } = payload;
    const { id, title } = item;

    try {
        yield call(api.delete, `plans/${id}`);
        yield put(deletePlanSuccess(id));
        toast.success(`Plano: "${title}" deletado com sucesso!`);
    } catch (error) {
        toast.error('Não foi possível deletar plano');
    }
}

export default all([
    takeLatest(GET_PLANS_REQUEST, getPlans),
    takeLatest(GET_PLAN_BY_ID_REQUEST, getPlanById),
    takeLatest(POST_PLAN_REQUEST, postPlan),
    takeLatest(PUT_PLAN_REQUEST, putPlan),
    takeLatest(DELETE_PLAN_REQUEST, deletePlan),
]);
