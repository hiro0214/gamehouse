import { VFC, memo } from 'react';
import styled from 'styled-components';
import { color, hand } from '../../../types/game/hanabi';
import { Cemetery } from '../../components/game/hanabi/Cemetery';
import { Field } from '../../components/game/hanabi/Field';
import { Hint } from '../../components/game/hanabi/Hint';
import { Player } from '../../components/game/hanabi/Player';
import { Toast } from '../../components/molucules/Toast';

const players = [
  {
    player: {
      name: 'いわもと',
    },
    hands: [
      {
        color: 'red',
        num: 1,
      },
      {
        color: 'yellow',
        num: 4,
      },
      {
        color: 'green',
        num: 2,
      },
      {
        color: 'blue',
        num: 5,
      },
    ],
  },
  {
    player: {
      name: 'やまだ',
    },
    hands: [
      {
        color: 'blue',
        num: 5,
      },
      {
        color: 'blue',
        num: 1,
      },
      {
        color: 'green',
        num: 4,
      },
      {
        color: 'green',
        num: 1,
      },
    ],
  },
  {
    player: {
      name: 'たなか',
    },
    hands: [
      {
        color: 'yellow',
        num: 3,
      },
      {
        color: 'blue',
        num: 1,
      },
      {
        color: 'green',
        num: 3,
      },
      {
        color: 'red',
        num: 4,
      },
    ],
  },
  // {
  //   player: {
  //     name: 'たなか'
  //   },
  //   hands: [
  //     {
  //       color: 'yellow',
  //       num: 3
  //     },
  //     {
  //       color: 'blue',
  //       num: 1
  //     },
  //     {
  //       color: 'green',
  //       num: 3
  //     },
  //     {
  //       color: 'red',
  //       num: 4
  //     }
  //   ]
  // },
  // {
  //   player: {
  //     name: 'たなか'
  //   },
  //   hands: [
  //     {
  //       color: 'yellow',
  //       num: 3
  //     },
  //     {
  //       color: 'blue',
  //       num: 1
  //     },
  //     {
  //       color: 'green',
  //       num: 3
  //     },
  //     {
  //       color: 'red',
  //       num: 4
  //     }
  //   ]
  // },
];

const fields: hand[] = [
  {
    color: 'red',
    num: 0,
  },
  {
    color: 'blue',
    num: 0,
  },
  {
    color: 'yellow',
    num: 0,
  },
  {
    color: 'green',
    num: 0,
  },
  {
    color: 'white',
    num: 0,
  },
];

const cemetery: { color: color; num: number[] }[] = [
  {
    color: 'red',
    num: [1, 1, 1, 2, 2, 3, 3, 4, 4, 5],
  },
  {
    color: 'blue',
    num: [1, 1, 1, 2, 2, 3, 3, 4, 4, 5],
  },
  {
    color: 'yellow',
    num: [1, 1, 1, 2, 2, 3, 3, 4, 4, 5],
  },
  {
    color: 'green',
    num: [1, 1, 1, 2, 2, 3, 3, 4, 4, 5],
  },
  {
    color: 'white',
    num: [1, 1, 1, 2, 2, 3, 3, 4, 4, 5],
  },
];

export const Hanabi: VFC = memo(() => {
  return (
    <_Container>
      <Toast turn={'いわもと'} />
      <_InfoArea>
        <Field deck={30} fields={fields} />
        <_Flex>
          <_Point>
            <p>SCORE : {0}</p>
            <p>MISS : {0}/3</p>
          </_Point>
          <Hint hint={8} />
        </_Flex>
        <Cemetery cemetery={cemetery} />
      </_InfoArea>
      <_PlayerArea>
        {players.map((p) => (
          <Player key={p.player.name} name={p.player.name} hands={p.hands} />
        ))}
      </_PlayerArea>
    </_Container>
  );
});

const _Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-self: flex-start;
  width: 1000px;
  min-height: 500px;
  margin-top: 100px;
  margin-bottom: 100px;
`;

const _InfoArea = styled.div``;

const _Flex = styled.div`
  display: flex;
`;

const _Point = styled.div`
  min-width: 150px;
  font-size: 24px;
  font-weight: bold;
`;
const _PlayerArea = styled.div`
  .player:not(:first-child) {
    margin-top: 40px;
  }
`;
