import { VFC, memo, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Field } from '../../components/game/theGame/Field';
import { InfoArea } from '../../components/game/theGame/InfoArea';
import { MyHand } from '../../components/game/theGame/MyHand';
import { PlayerInfo } from '../../components/game/theGame/PlayerInfo';
import { MessageArea } from '../../components/game/theGame/MessageArea';
import { Toast } from '../../components/molucules/Toast';
import { useMyInfo } from '../../providers/UserInfoProvider';
import { socket } from '../../socket';
import { gameDataType, playCardType, playerHandType } from '../../../types/game/theGame';
import { Button } from '../../components/atoms/Button';
import { useToLobby } from '../../hooks/useToLobby';

const gameName = 'theGame';

export const TheGame: VFC = memo(() => {
  const { myInfo } = useMyInfo();
  const { toLobby } = useToLobby();
  const [gameData, setGameData] = useState<gameDataType>({} as gameDataType);
  const [selectedHand, setSelectedHand] = useState<number | null>(null);

  useEffect(() => {
    socket.on(`${gameName}:getData`, (gameData: gameDataType) => setGameData(gameData));
    socket.emit(`${gameName}:getData`);
  }, []);

  const playCard = (fieldIndex: number) => {
    if (selectedHand === null) return;

    setSelectedHand(null);
    const post: playCardType = {
      userId: myInfo.id,
      selectIndex: selectedHand,
      fieldIndex,
    };

    gameData.playerList.find((p) => p.user.id === myInfo.id)?.hand.length === 1
      ? turnFinish()
      : socket.emit(`${gameName}:playCard`, post);
  };

  const turnFinish = () => socket.emit(`${gameName}:turnFinish`);

  const turnContinue = () => socket.emit(`${gameName}:turnContinue`);

  const checkDisabled = () => {
    const flag = getCurrentPlayer(gameData).id !== myInfo.id || gameData.status !== 'remaining' ? true : false;
    return flag ? 'is-disabled' : '';
  };

  const getCurrentPlayer = (gameData: gameDataType) => gameData.playerList[gameData.turn].user;

  const getMyHand = (playerList: playerHandType[]) => {
    /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */
    return playerList.find((p) => p.user.id === myInfo.id)!.hand;
  };

  return Object.keys(gameData).length ? (
    <>
      {gameData.status !== 'finish' && <Toast turn={getCurrentPlayer(gameData).name} />}
      {(gameData.status === 'finish' || getCurrentPlayer(gameData).id === myInfo.id) && (
        <MessageArea
          status={gameData.status}
          remainingHand={gameData.remainingHand}
          turnFinish={turnFinish}
          turnContinue={turnContinue}
        />
      )}
      <_Container className={checkDisabled()}>
        <Field
          fieldCards={gameData.fieldCards}
          selectedHand={selectedHand !== null && getMyHand(gameData.playerList)[selectedHand]}
          playCard={playCard}
        />
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
      {gameData.status === 'finish' && myInfo.isAdmin && (
        <_BtnArea>
          <Button label={'ロビーに戻る'} onclick={toLobby} color={'teal'} />
        </_BtnArea>
      )}
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

const _BtnArea = styled.div`
  position: absolute;
  bottom: 0;
  text-align: center;
`;
