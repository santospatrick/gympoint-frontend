import React from 'react';
import { Provider } from 'react-redux';

import Signin from 'pages/Signin';
import store from './store';

function App() {
    return (
        <Provider store={store}>
            <Signin />
        </Provider>
    );
}

export default App;
