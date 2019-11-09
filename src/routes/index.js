import React from 'react';
import { Switch } from 'react-router-dom';

import Signin from 'pages/Signin';
import Dashboard from 'pages/Dashboard';
import Route from './Route';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Signin} />
            <Route path="/dashboard" component={Dashboard} isPrivate />
        </Switch>
    );
}
