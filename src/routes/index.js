import React from 'react';
import { Switch } from 'react-router-dom';

import Signin from 'pages/Signin';
import Students from 'pages/Students';
import StudentsRegister from 'pages/StudentsRegister';

import Route from './Route';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Signin} />
            <Route path="/students" exact component={Students} isPrivate />
            <Route
                path="/students/new"
                exact
                component={StudentsRegister}
                isPrivate
            />
        </Switch>
    );
}
