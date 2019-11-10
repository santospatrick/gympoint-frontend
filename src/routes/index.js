import React from 'react';
import { Switch } from 'react-router-dom';

import Signin from 'pages/Signin';
import Students from 'pages/Students';
import Route from './Route';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Signin} />
            <Route path="/students" exact component={Students} isPrivate />
        </Switch>
    );
}
