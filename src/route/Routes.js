import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { RouteWithLayout } from 'components'
import { NotFound as NotFoundView } from 'views';
import { routePath } from './paths';

const Routes = () => {
  return (
    <Switch>
      {/* <Redirect exact from="/" to="/" /> */}
      {routePath.map(rtPath => (
        <RouteWithLayout
          key={rtPath.id}
          component={rtPath.component}
          exact
          layout={rtPath.layout}
          path={rtPath.path}
        />
      )
      )}
      <Route component={NotFoundView}
        exact
        path="/not-found"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;