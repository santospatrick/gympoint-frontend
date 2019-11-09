import { all, takeLatest } from 'redux-saga/effects';
import { SIGN_IN_REQUEST } from './actionTypes';

function signIn({ payload }) {
    console.log('signin saga');
}

export default all([takeLatest(SIGN_IN_REQUEST, signIn)]);
