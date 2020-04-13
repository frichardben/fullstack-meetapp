import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import New from '../pages/New';
import Edit from '../pages/Edit';
import Details from '../pages/Details';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exec componente={SignIn} />
      <Route path="/register" componente={SignUp} />

      <Route path="/dashboard" componente={Dashboard} />
      <Route path="/profile" componente={Profile} />

      <Route path="/new" componente={New} />
      <Route path="/details/:id" componente={Details} />
      <Route path="/details/:id/edit" componente={Edit} />
    </Switch>
  );
}
