import { KowloonTactics } from '../pages/game/KowloonTactics';

export const gameRoutes = [
  {
    path: '/kowloon_tactics',
    exact: false,
    children: <KowloonTactics />,
  },
];
