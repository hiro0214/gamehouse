import { UserInfoProvider } from './providers/UserInfoProvider';
import { Router } from './router/Router';

export const App = () => {
  return (
    <UserInfoProvider>
      <Router />
    </UserInfoProvider>
  );
};
