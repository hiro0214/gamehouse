import { User } from "../user";

export type color = 'red' | 'blue' | 'yellow' | 'green' | 'white' | 'purple';

export type gameData = {
  deck: hand[],
  players: playerHandType[],
  fields: hand[],
  cemetery: cemeteryType[],
  score: number,
  turn: number,
  hint: number,
  miss: number
}

export type hand = {
  color: string;
  num: number
}

export type playerHandType = {
  player: User;
  hands: hand[];
}

export type cemeteryType = {
  color: color;
  num: number[]
}

// const players = [
//   {
//     player: {
//       name: 'いわもと',
//     },
//     hands: [
//       {
//         color: 'red',
//         num: 1,
//       },
//       {
//         color: 'yellow',
//         num: 4,
//       },
//       {
//         color: 'green',
//         num: 2,
//       },
//       {
//         color: 'blue',
//         num: 5,
//       },
//     ],
//   },
//   {
//     player: {
//       name: 'やまだ',
//     },
//     hands: [
//       {
//         color: 'blue',
//         num: 5,
//       },
//       {
//         color: 'blue',
//         num: 1,
//       },
//       {
//         color: 'green',
//         num: 4,
//       },
//       {
//         color: 'green',
//         num: 1,
//       },
//     ],
//   },
//   {
//     player: {
//       name: 'たなか',
//     },
//     hands: [
//       {
//         color: 'yellow',
//         num: 3,
//       },
//       {
//         color: 'blue',
//         num: 1,
//       },
//       {
//         color: 'green',
//         num: 3,
//       },
//       {
//         color: 'red',
//         num: 4,
//       },
//     ],
//   },
//   // {
//   //   player: {
//   //     name: 'たなか'
//   //   },
//   //   hands: [
//   //     {
//   //       color: 'yellow',
//   //       num: 3
//   //     },
//   //     {
//   //       color: 'blue',
//   //       num: 1
//   //     },
//   //     {
//   //       color: 'green',
//   //       num: 3
//   //     },
//   //     {
//   //       color: 'red',
//   //       num: 4
//   //     }
//   //   ]
//   // },
//   // {
//   //   player: {
//   //     name: 'たなか'
//   //   },
//   //   hands: [
//   //     {
//   //       color: 'yellow',
//   //       num: 3
//   //     },
//   //     {
//   //       color: 'blue',
//   //       num: 1
//   //     },
//   //     {
//   //       color: 'green',
//   //       num: 3
//   //     },
//   //     {
//   //       color: 'red',
//   //       num: 4
//   //     }
//   //   ]
//   // },
// ];

// const fields: hand[] = [
//   {
//     color: 'red',
//     num: 0,
//   },
//   {
//     color: 'blue',
//     num: 0,
//   },
//   {
//     color: 'yellow',
//     num: 0,
//   },
//   {
//     color: 'green',
//     num: 0,
//   },
//   {
//     color: 'white',
//     num: 0,
//   },
// ];

// const cemetery: cemeteryType[] = [
//   {
//     color: 'red',
//     num: [1, 1, 1, 2, 2, 3, 3, 4, 4, 5],
//   },
//   {
//     color: 'blue',
//     num: [1, 1, 1, 2, 2, 3, 3, 4, 4, 5],
//   },
//   {
//     color: 'yellow',
//     num: [1, 1, 1, 2, 2, 3, 3, 4, 4, 5],
//   },
//   {
//     color: 'green',
//     num: [1, 1, 1, 2, 2, 3, 3, 4, 4, 5],
//   },
//   {
//     color: 'white',
//     num: [1, 1, 1, 2, 2, 3, 3, 4, 4, 5],
//   },
// ];
