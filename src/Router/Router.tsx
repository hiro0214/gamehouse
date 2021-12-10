import { memo } from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { CommonBackground } from '../components/style/CommonBackground';
import { Contents } from '../components/style/Contents';
import { Entrance } from '../pages/Entrance';
import { Lobby } from '../pages/Lobby';
import { gameRoutes } from './GameRoutes';

export const Router = memo(() => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Entrance />
        </Route>
        <Route path="/lobby">
          <CommonBackground>
            <Contents>
              <Lobby />
            </Contents>
          </CommonBackground>
        </Route>
        <Route
          path="/game"
          render={({ match: { url } }) => (
            <Switch>
              {gameRoutes.map((route) => (
                <Route key={route.path} exact={route.exact} path={`${url}${route.path}`}>
                  <CommonBackground>
                    <Contents>{route.children}</Contents>
                  </CommonBackground>
                </Route>
              ))}
            </Switch>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
});
