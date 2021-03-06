import React from 'react';
import { Switch } from 'react-router-dom';

import Signin from 'pages/Signin';
import Students from 'pages/Students';
import StudentsRegister from 'pages/StudentsRegister';

import PlansRegister from 'pages/PlansRegister';
import Plans from 'pages/Plans';
import RegistrationsRegister from 'pages/RegistrationsRegister';
import Registrations from 'pages/Registrations/Registrations';
import HelpOrders from 'pages/HelpOrders';
import Route from './Route';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Signin} />

            {/* Students */}
            <Route path="/students" exact component={Students} isPrivate />
            <Route
                path="/students/new"
                exact
                component={StudentsRegister}
                isPrivate
            />
            <Route
                path="/students/:id"
                exact
                component={StudentsRegister}
                isPrivate
            />

            {/* Plans */}
            <Route path="/plans" exact component={Plans} isPrivate />

            <Route
                path="/plans/new"
                exact
                component={PlansRegister}
                isPrivate
            />
            <Route
                path="/plans/:id"
                exact
                component={PlansRegister}
                isPrivate
            />

            {/* Registrations */}
            <Route
                path="/registrations"
                exact
                component={Registrations}
                isPrivate
            />
            <Route
                path="/registrations/new"
                exact
                component={RegistrationsRegister}
                isPrivate
            />
            <Route
                path="/registrations/:id"
                exact
                component={RegistrationsRegister}
                isPrivate
            />

            {/* HelpOrders */}
            <Route path="/help-orders" exact component={HelpOrders} isPrivate />
        </Switch>
    );
}
