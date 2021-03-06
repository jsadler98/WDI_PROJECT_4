import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from '../auth/Login';
import Register from '../auth/Register';

import GamesIndex from '../games/GamesIndex';
import GamesShow  from  '../games/GamesShow';
import GamesNew   from '../games/GamesNew';
import GamesEdit  from '../games/GamesEdit';

import ProtectedRoute from './ProtectedRoutes';

const Routes = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <ProtectedRoute path="/games/new" component={GamesNew} />
      <Route exact path="/" component={GamesIndex} />
      <ProtectedRoute path="/games/:id/edit" component={GamesEdit} />
      <Route path="/games/:id" component={GamesShow} />
    </Switch>
  );
};

export default Routes;
