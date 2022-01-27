import React, { VFC, memo, useEffect, useState } from 'react';
import styled from 'styled-components';
import { gameDataType } from '../../../types/game/hanabi';
import { Cemetery } from '../../components/game/hanabi/Cemetery';
import { Field } from '../../components/game/hanabi/Field';
import { Hint } from '../../components/game/hanabi/Hint';
import { Player } from '../../components/game/hanabi/Player';
import { Toast } from '../../components/molucules/Toast';
import { useMyInfo } from '../../providers/UserInfoProvider';
import { socket } from '../../socket';
import { variable } from '../../variable';

export const Hanabi: VFC = memo(() => {
  const { myInfo } = useMyInfo();
  const [gameData, setGameData] = useState<gameDataType>({} as gameDataType);
  const [element, setElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    socket.on('hanabi:getData', (data: gameDataType) => setGameData(data));
    socket.emit('hanabi:getData');
  }, []);

  const selectedHand = (e: React.MouseEvent<HTMLElement>) => {
    const element = e.currentTarget;
    setElement(element);
    document.querySelector('.hand.selected')?.classList.remove('selected');
    element.classList.add('selected');
  };

  const getModalOffset = () => {
    const top = element?.getBoundingClientRect().top as number;
    return `${top - 100}px`;
  };

  const getSelectHand = () => {
    if (!element) return;

    const index = [].slice.call(element.parentElement?.childNodes).indexOf(element as never);
    const selectPlayer = element.closest('.player') as never;
    const wrapper = document.querySelectorAll('.playerarea .player');
    const player = [].slice.call(wrapper).indexOf(selectPlayer);
    const selecteHand = {
      player,
      index,
    };

    return selecteHand;
  };

  const playHand = () => {
    const select = getSelectHand();
    socket.emit('hanabi:playHand', select);
    setElement(null);
    document.querySelector('.hand.selected')?.classList.remove('selected');
  };

  const discardHand = () => {
    const select = getSelectHand();
    socket.emit('hanabi:discardHand', select);
    setElement(null);
    document.querySelector('.hand.selected')?.classList.remove('selected');
  };

  const colorHint = () => {
    const select = getSelectHand();
    socket.emit('hanabi:colorHint', select);
    setElement(null);
    document.querySelector('.hand.selected')?.classList.remove('selected');
  };

  const numHint = () => {
    const select = getSelectHand();
    socket.emit('hanabi:numHint', select);
    setElement(null);
    document.querySelector('.hand.selected')?.classList.remove('selected');
  };

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
      <_PlayerArea className={'playerarea'}>
        {gameData.players.map((p) => (
          <Player key={p.player.name} name={p.player.name} hands={p.hands} onclick={selectedHand} />
        ))}
        {element && element.className.indexOf('reverse') !== -1 && (
          <_Modal style={{ top: getModalOffset() }}>
            <p>このカードをどうする?</p>
            <button onClick={playHand}>場に出す</button>
            <button onClick={discardHand}>捨てる</button>
          </_Modal>
        )}
        {element && element.className.indexOf('reverse') === -1 && (
          <_Modal style={{ top: getModalOffset() }}>
            {gameData.hint === 0 ? <p>ヒントは使えません。</p> : <p>カードにヒントを出す?</p>}
            <button onClick={colorHint} disabled={gameData.hint === 0}>
              色のヒントを出す
            </button>
            <button onClick={numHint} disabled={gameData.hint === 0}>
              数字のヒントを出す
            </button>
          </_Modal>
        )}
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
  &.is-disabled {
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
  position: relative;
  .player:not(:first-child) {
    margin-top: 40px;
  }
`;

const _Modal = styled.div`
  position: absolute;
  right: calc(100% + 10px);
  z-index: 5;
  width: 200px;
  padding: 16px 20px;
  background: #fff;
  border: 2px solid ${variable.border};
  border-radius: 6px;
  text-align: center;
  > p {
    font-size: 14px;
    font-weight: bold;
  }
  > button {
    display: block;
    width: 100%;
    margin-top: 10px;
    padding: 8px 0;
    font-weight: bold;
    color: #fff;
    background: ${variable.blue};
    border-radius: 10px;
    &:disabled {
      opacity: 0.5;
      pointer-events: none;
    }
  }
`;
