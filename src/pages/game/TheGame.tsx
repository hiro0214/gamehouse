import { VFC, memo, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Field } from '../../components/game/theGame/Field';
import { InfoArea } from '../../components/game/theGame/InfoArea';
import { MyHand } from '../../components/game/theGame/MyHand';
import { PlayerInfo } from '../../components/game/theGame/PlayerInfo';
import { Toast } from '../../components/molucules/Toast';
import { useMyInfo } from '../../providers/UserInfoProvider';
import { socket } from '../../socket';
import { gameDataType, playerHandType, messageStatusType } from '../../../types/game/theGame';
import { MessageArea } from '../../components/game/theGame/MessageArea';

const gameName = 'theGame';

export const TheGame: VFC = memo(() => {
  const { myInfo } = useMyInfo();
  const [gameData, setGameData] = useState<gameDataType>({
    // playerList: [
    //   {
    //     user: { id: '1', name: 'たなか', icon: '001', isAdmin: false},
    //     hand: [1, 2, 3, 40, 70, 90]
    //   }
    // ],
    // fieldCards: [ [], [], [], [] ],
    // deck: [
    //   43, 57, 19, 32, 93, 78,  7, 10, 84, 35, 16, 65,
    //   92, 21, 40, 49, 47, 30, 44, 48, 27, 23, 66, 86,
    //   97, 96, 88, 69, 18, 60, 46, 68, 55, 24, 76, 42,
    //   45,  8, 99, 22, 36, 82, 17, 75,  5, 61, 90, 70,
    //     3,  6, 89, 39, 94, 20, 95, 87,  4, 98, 83, 56,
    //     2, 51, 80, 74, 12, 77, 64, 53, 33, 62, 37, 79,
    //   52, 41, 50, 14, 81, 72, 54, 29, 71, 58, 25, 85,
    //   38, 31
    // ],
    // score: 0,
    // turn: 0
  } as gameDataType);
  const [status, setStatus] = useState<messageStatusType>('remaining');
  const [remainingHand, setRemainingHand] = useState(2);

  useEffect(() => {
    socket.on(`${gameName}:getData`, (gameData: gameDataType) => setGameData(gameData));
    socket.emit(`${gameName}:getData`);
  }, []);

  const getCurrentPlayer = (gameData: gameDataType) => gameData.playerList[gameData.turn].user;
  const getMyHand = (playerList: playerHandType[]) => {
    /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */
    return playerList.find((p) => p.user.id === myInfo.id)!.hand;
    // return [1, 2, 3, 40, 70, 90];
  };

  // カードをフィールドに出す
  const fuga = () => {
    setRemainingHand(remainingHand - 1);
    if (remainingHand - 1 <= 0) setStatus('continue');
  };

  return Object.keys(gameData).length ? (
    <>
      <Toast turn={getCurrentPlayer(gameData).name} />
      <_Container className={getCurrentPlayer(gameData).id !== myInfo.id ? 'is-disabled' : ''}>
        {getCurrentPlayer(gameData).id === myInfo.id && (
          <MessageArea status={status} remainingHand={remainingHand} />
        )}
        <Field fieldCards={gameData.fieldCards} />
        <div style={{ width: '450px' }}>
          <InfoArea deck={gameData.deck.length} score={gameData.score} />
          <MyHand hands={getMyHand(gameData.playerList)} />
        </div>
        <PlayerInfo playerList={gameData.playerList} />
      </_Container>
    </>
  ) : null;
});

const _Container = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 1100px;
  margin-top: 150px;
  margin-right: 200px;
  margin-bottom: 50px;
  &.is-disabled {
    pointer-events: none;
  }
`;
