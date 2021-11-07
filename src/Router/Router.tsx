import { memo } from 'react';
import { Route, Switch } from 'react-router';
import { Enter } from '../pages/Enter';
import { Lobby } from '../pages/Lobby';

export const Router = memo(() => {
  return (
    <Switch>
      <Route exact path="/">
        <Enter />
      </Route>
      <Route path="/lobby">
        <Lobby />
      </Route>
    </Switch>
  );
});
