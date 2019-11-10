import { all, call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from 'services/api';
import history from 'services/history';

import { SIGN_IN_REQUEST, SIGN_OUT } from './actionTypes';
import { signInFailure, signInSuccess } from './actions';

export function* signIn({ payload }) {
    try {
        const { email, password } = payload;
        const response = yield call(api.post, 'sessions', {
            email,
            password,
        });

        const { token, user } = response.data;

        yield put(signInSuccess({ token, user }));

        history.push('/dashboard');
    } catch (error) {
        toast.error('Falha na autenticação, verifique seus dados');
        yield put(signInFailure());
    }
}

function setToken({ payload }) {
    if (!payload) return;

    const { token } = payload.auth;

    if (token) {
        api.defaults.headers.Authorization = `Bearer ${token}`;
    }
}

export function signOut() {
    history.push('/');
}

export default all([
    takeLatest('persist/REHYDRATE', setToken),
    takeLatest(SIGN_IN_REQUEST, signIn),
    takeLatest(SIGN_OUT, signOut),
]);
