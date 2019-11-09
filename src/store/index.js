import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMonitor =
    process.env.NODE_ENV === 'development'
        ? console.tron.createSagaMonitor()
        : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const store = createStore(
    rootReducer,
    compose(applyMiddleware(sagaMiddleware), console.tron.createEnhancer()),
);

sagaMiddleware.run(rootSaga);

export default store;
