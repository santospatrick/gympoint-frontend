import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Signin from 'pages/Signin';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Signin} />
        </Switch>
    );
}
