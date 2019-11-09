import Reactotron from 'reactotron-react-js';
import sagaPlugin from 'reactotron-redux-saga';
import { reactotronRedux } from 'reactotron-redux';

if (process.env.NODE_ENV === 'development') {
    const tron = Reactotron.configure({ name: 'Gympoint' })
        .use(reactotronRedux())
        .use(sagaPlugin())
        .connect();

    console.tron = tron;

    tron.clear();
}
