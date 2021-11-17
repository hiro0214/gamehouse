import { memo } from 'react';
import { Route, Switch } from 'react-router';
import { Entrance } from '../pages/Entrance';
import { Lobby } from '../pages/Lobby';
import { UserInfoProvider } from '../providers/UserInfoProvider';

export const Router = memo(() => {
  return (
    <Switch>
      <UserInfoProvider>
        <Route exact path="/">
          <Entrance />
        </Route>
        <Route path="/lobby">
          <Lobby />
        </Route>
      </UserInfoProvider>
    </Switch>
  );
});
