import { createStore } from 'redux';
import reactotron from 'config/reactotron';
import rootReducer from './modules/rootReducer';

const store = createStore(rootReducer, reactotron.createEnhancer());

export default store;
