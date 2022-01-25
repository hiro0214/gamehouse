import { VFC, memo, useEffect, useState } from 'react';
import styled from 'styled-components';
import { gameData } from '../../../types/game/hanabi';
import { Cemetery } from '../../components/game/hanabi/Cemetery';
import { Field } from '../../components/game/hanabi/Field';
import { Hint } from '../../components/game/hanabi/Hint';
import { Player } from '../../components/game/hanabi/Player';
import { Toast } from '../../components/molucules/Toast';
import { useMyInfo } from '../../providers/UserInfoProvider';
import { socket } from '../../socket';

export const Hanabi: VFC = memo(() => {
  const { myInfo } = useMyInfo();
  const [gameData, setGameData] = useState<gameData>({} as gameData);

  useEffect(() => {
    socket.on('hanabi:getData', (data: gameData) => setGameData(data));
    socket.emit('hanabi:getData');
  }, []);

  return Object.keys(gameData).length ? (
    <_Container
      className={gameData.players[gameData.turn].player.name !== myInfo.name ? 'is-disabled' : ''}
    >
      <Toast turn={gameData.players[gameData.turn].player.name} />
      <_InfoArea>
        <Field deck={gameData.deck.length} fields={gameData.fields} />
        <_Flex>
          <_Point>
            <p>SCORE : {gameData.score}</p>
            <p>MISS : {gameData.miss}/3</p>
          </_Point>
          <Hint hint={gameData.hint} />
        </_Flex>
        <Cemetery cemetery={gameData.cemetery} />
      </_InfoArea>
      <_PlayerArea>
        {gameData.players.map((p) => (
          <Player key={p.player.name} name={p.player.name} hands={p.hands} />
        ))}
      </_PlayerArea>
    </_Container>
  ) : null;
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
  &.is-disabed {
    pointer-events: none;
  }
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
