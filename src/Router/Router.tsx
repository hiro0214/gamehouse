import { memo } from 'react';
import { Route, Switch } from 'react-router';
import { Entrance } from '../pages/Entrance';
import { Lobby } from '../pages/Lobby';

export const Router = memo(() => {
  return (
    <Switch>
      <Route exact path="/">
        <Entrance />
      </Route>
      <Route path="/lobby">
        <Lobby />
      </Route>
    </Switch>
  );
});
