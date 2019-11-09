import React from 'react';

import { Provider } from 'react-redux';

import Signin from 'pages/Signin';
import store from './store';
import GlobalStyle from './styles/global';

function App() {
    return (
        <Provider store={store}>
            <Signin />
            <GlobalStyle />
        </Provider>
    );
}

export default App;
