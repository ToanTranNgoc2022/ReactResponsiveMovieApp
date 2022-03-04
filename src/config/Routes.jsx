import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Detail from '../pages/detail/Detail';

const Routes = () => {
    return (
        <Switch>

            <Route
                path='/:category/:id'
                component={Detail}
            />
            <Route
                path='/'
                exact
                component={Detail}
            />
        </Switch>
    );
}

export default Routes;
