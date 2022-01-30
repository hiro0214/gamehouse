import { Hanabi } from '../pages/game/Hanabi';
import { KowloonTactics } from '../pages/game/KowloonTactics';

export const gameRoutes = [
  {
    path: '/kowloon_tactics',
    exact: false,
    children: <KowloonTactics />,
  },
  {
    path: '/hanabi',
    exact: false,
    children: <Hanabi />,
  },
];
