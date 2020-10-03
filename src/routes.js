import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Import pages routes
import Main from './pages/Main';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
      </Switch>
    </BrowserRouter>
  );
}
