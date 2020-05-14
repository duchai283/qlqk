import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import LichHen from '../containers/LichHen';
import Patient from '../containers/Patient';
import About from '../components/About';

const Router = () => {
  let { path } = useRouteMatch();
  console.log('path', path);
  return (
    <Switch>
      <Route exact path={`${path}/benhnhan`}>
        <Patient></Patient>
      </Route>
      <Route exact path={`${path}/lichhen`}>
        <LichHen></LichHen>
      </Route>
      <Route exact path={`${path}/about`}>
        <About></About>
      </Route>
    </Switch>
  );
};

export default Router;
