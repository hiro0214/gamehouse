import { memo } from 'react';
import { Route, Switch } from 'react-router';
import { CommonBackground } from '../components/style/CommonBackground';
import { Entrance } from '../pages/Entrance';
import { Lobby } from '../pages/Lobby';
import { UserInfoProvider } from '../providers/UserInfoProvider';
import { gameRoutes } from './GameRoutes';

export const Router = memo(() => {
  return (
    <Switch>
      <UserInfoProvider>
        <Route exact path="/">
          <Entrance />
        </Route>
        <Route path="/lobby">
          <CommonBackground>
            <Lobby />
          </CommonBackground>
        </Route>
        <Route
          path="/game"
          render={({ match: { url } }) => (
            <Switch>
              {gameRoutes.map((route) => (
                <Route key={route.path} exact={route.exact} path={`${url}${route.path}`}>
                  <CommonBackground>{route.children}</CommonBackground>
                </Route>
              ))}
            </Switch>
          )}
        />
      </UserInfoProvider>
    </Switch>
  );
});
