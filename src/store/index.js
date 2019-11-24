import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const persistConfig = {
    key: 'gympoint',
    storage,
    whitelist: ['auth', 'user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMonitor =
    process.env.NODE_ENV === 'development'
        ? console.tron.createSagaMonitor()
        : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const enhancer =
    process.env.NODE_ENV === 'development'
        ? compose(
              applyMiddleware(sagaMiddleware),
              console.tron.createEnhancer(),
          )
        : applyMiddleware(sagaMiddleware);

const store = createStore(persistedReducer, enhancer);

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export { store, persistor };
