import { all, takeLatest, call } from 'redux-saga/effects';

import api from 'services/api';
import { toast } from 'react-toastify';
import history from 'services/history';
import { POST_PLAN_REQUEST } from './actionTypes';

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

export default all([takeLatest(POST_PLAN_REQUEST, postPlan)]);
