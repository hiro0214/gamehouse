import socketClient from 'socket.io-client';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router/Router';

export const socket = socketClient();

export const App = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};
