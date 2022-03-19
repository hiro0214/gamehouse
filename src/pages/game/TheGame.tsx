import { VFC, memo } from 'react';
import styled from 'styled-components';
import { User } from '../../../types/user';
import { Field } from '../../components/game/theGame/Field';
import { InfoArea } from '../../components/game/theGame/InfoArea';
import { MyHand } from '../../components/game/theGame/MyHand';
import { PlayerInfo } from '../../components/game/theGame/PlayerInfo';
import { Toast } from '../../components/molucules/Toast';
import { useMyInfo } from '../../providers/UserInfoProvider';
import { socket } from '../../socket';

const gameName = 'theGame';

const gameData = {
  userList: [
    {
      id: '1',
      name: 'たなか',
      icon: '1',
      isAdmin: false,
    },
  ],
  hands: [1, 2, 3, 4, 88, 99],
  fieldCards: [
    [99, 88, 3, 2, 1],
    [99, 88, 3, 2, 1],
    [10, 20, 30, 88, 99],
    [10, 20, 30, 88, 99],
  ],
  deck: 98,
  score: 0,
  turn: 0,
};

export const TheGame: VFC = memo(() => {
  return (
    <>
      <Toast turn={gameData.userList[gameData.turn].name} />
      <_Container>
        <Field fieldCards={gameData.fieldCards} />
        <div style={{ width: '450px' }}>
          <InfoArea deck={gameData.deck} score={gameData.score} />
          <MyHand hands={gameData.hands} />
        </div>
        <PlayerInfo userList={gameData.userList} />
      </_Container>
    </>
  );
});

const _Container = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 1100px;
  margin-top: 150px;
  margin-right: 200px;
  margin-bottom: 50px;
`;
