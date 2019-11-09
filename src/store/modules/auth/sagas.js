import { all, call, put, takeLatest } from 'redux-saga/effects';
import api from 'services/api';
import history from 'services/history';

import { SIGN_IN_REQUEST } from './actionTypes';
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

        // history.push('/dashboard');
    } catch (error) {
        yield put(signInFailure());
    }
}

export default all([takeLatest(SIGN_IN_REQUEST, signIn)]);
