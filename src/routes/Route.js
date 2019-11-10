import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { store } from 'store';
import DefaultLayout from 'pages/_layouts/default';

function RouteWrapper({ component: Component, isPrivate = false, ...rest }) {
    const { signed } = store.getState().auth;

    if (!signed && isPrivate) {
        return <Redirect to="/" />;
    }

    if (signed && !isPrivate) {
        return <Redirect to="/students" />;
    }

    return (
        <Route
            {...rest}
            render={props =>
                signed ? (
                    <DefaultLayout>
                        <Component {...props} />
                    </DefaultLayout>
                ) : (
                    <Component {...props} />
                )
            }
        />
    );
}

RouteWrapper.propTypes = {
    isPrivate: PropTypes.bool,
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
        .isRequired,
};

RouteWrapper.defaultProps = {
    isPrivate: false,
};

export default RouteWrapper;
