import { VFC, memo, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Field } from '../../components/game/theGame/Field';
import { InfoArea } from '../../components/game/theGame/InfoArea';
import { MyHand } from '../../components/game/theGame/MyHand';
import { PlayerInfo } from '../../components/game/theGame/PlayerInfo';
import { Toast } from '../../components/molucules/Toast';
import { useMyInfo } from '../../providers/UserInfoProvider';
import { socket } from '../../socket';
import { gameDataType, messageStatusType, playCardType, playerHandType } from '../../../types/game/theGame';
import { MessageArea } from '../../components/game/theGame/MessageArea';

const gameName = 'theGame';

export const TheGame: VFC = memo(() => {
  const { myInfo } = useMyInfo();
  const [gameData, setGameData] = useState<gameDataType>({} as gameDataType);
  const [status, setStatus] = useState<messageStatusType>('remaining');
  const [selectedHand, setSelectedHand] = useState<number | null>(null);
  const [remainingHand, setRemainingHand] = useState(2);

  useEffect(() => {
    socket.on(`${gameName}:getData`, (gameData: gameDataType) => setGameData(gameData));
    socket.emit(`${gameName}:getData`);
  }, []);

  const playCard = (fieldIndex: number) => {
    if (selectedHand === null) return;

    const post: playCardType = {
      userId: myInfo.id,
      selectIndex: selectedHand,
      fieldIndex,
    };

    socket.emit(`${gameName}:playCard`, post);
    setSelectedHand(null);
    setRemainingHand(remainingHand - 1);
    if (gameData.playerList.find((p) => p.user.id === myInfo.id)?.hand.length === 1) turnFinish();
    else if (remainingHand - 1 <= 0) setStatus('continue');
  };

  const turnFinish = () => {
    socket.emit(`${gameName}:turnFinish`);
    setRemainingHand(2);
    setStatus('remaining');
  };

  const turnContinue = () => setStatus('remaining');

  const checkDisabled = () => {
    const flag = getCurrentPlayer(gameData).id !== myInfo.id || status === 'continue' ? true : false;
    return flag ? 'is-disabled' : '';
  };
  const getCurrentPlayer = (gameData: gameDataType) => gameData.playerList[gameData.turn].user;
  const getMyHand = (playerList: playerHandType[]) => {
    /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */
    return playerList.find((p) => p.user.id === myInfo.id)!.hand;
  };

  return Object.keys(gameData).length ? (
    <>
      <Toast turn={getCurrentPlayer(gameData).name} />
      {getCurrentPlayer(gameData).id === myInfo.id && (
        <MessageArea
          status={status}
          remainingHand={remainingHand}
          turnFinish={turnFinish}
          turnContinue={turnContinue}
        />
      )}
      <_Container className={checkDisabled()}>
        <Field fieldCards={gameData.fieldCards} playCard={playCard} />
        <div style={{ width: '450px' }}>
          <InfoArea deck={gameData.deck.length} score={gameData.score} />
          <MyHand
            hands={getMyHand(gameData.playerList)}
            selectedHand={selectedHand}
            setSelectedHand={setSelectedHand}
          />
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
