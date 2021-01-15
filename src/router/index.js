import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";

const RouterView = ({routes}) =>  (
  <Switch>
    {routes.map((route, i) => (
      <Route
      exact
      key={i}
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.children} />
      )}/>
    ))}
  </Switch>
);

export default RouterView