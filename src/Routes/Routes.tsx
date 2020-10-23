import React, { FunctionComponent } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { PageHome } from "Pages";


export const Routes: FunctionComponent = () => {
  return (
    <Switch>
      <Route exact path={"/"} component={PageHome} />
      <Redirect to={"/"} />
    </Switch>
  );
};
