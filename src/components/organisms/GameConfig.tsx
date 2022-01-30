import { VFC, memo, useState, ChangeEvent, useEffect } from 'react';
import styled from 'styled-components';
import { GameType } from '../../../types/gameList';
import { useCurrentConfig } from '../../hooks/useCurrentConfig';
import { useGameStart } from '../../hooks/useGameStart';
import { useMyInfo } from '../../providers/UserInfoProvider';
import { socket } from '../../socket';
import { gameList, variable } from '../../variable';
import { Button } from '../atoms/Button';
import { Heading } from '../atoms/Heading';
import { Select } from '../atoms/Select';

const gameListOption: { key: string; value: string }[] = [];
gameList.map((game) => gameListOption.push({ key: game, value: game }));

export const GameConfig: VFC = memo(() => {
  const [currentGame, setCurrentGame] = useState<GameType | null>(null);
  const { myInfo } = useMyInfo();
  const { gameStart } = useGameStart();
  const { currentConfig, setConfig } = useCurrentConfig();

  const onChangeValue = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value.indexOf('--') === -1) {
      socket.emit('common:setCurrentGame', value);
    } else {
      socket.emit('common:setCurrentGame', null);
    }
  };

  const onclickGameStart = () => socket.emit('common:gameStart');

  useEffect(() => {
    socket.on('common:getCurrentGame', (currentGame: GameType) => {
      setCurrentGame(currentGame);
      setConfig(currentGame);
    });
    socket.on('common:setCurrentGame', (currentGame: GameType) => {
      setCurrentGame(currentGame);
      setConfig(currentGame);
    });
    socket.on('common:gameStart', (game: GameType) => gameStart(game));

    socket.emit('common:getCurrentGame');
  }, []);

  return (
    <_Container>
      <Heading text={'Setting'} size={'2'}></Heading>
      <_Center>
        <Select
          options={gameListOption}
          hdg={'ゲーム'}
          value={currentGame ? currentGame : ''}
          onChange={onChangeValue}
          disabled={myInfo.isAdmin}
        >
          <option>-- 選択してください --</option>
        </Select>
      </_Center>
      <_Contents>
        {currentGame && (
          <_ConfigWrapper>
            {currentConfig}
            {myInfo.isAdmin && (
              <Button label={'スタート'} onclick={onclickGameStart} color={'blue'} />
            )}
          </_ConfigWrapper>
        )}
      </_Contents>
    </_Container>
  );
});

const _Container = styled.div`
  width: 60%;
  padding: 10px 20px 20px;
  background: rgba(20, 20, 20, 0.2);
  border-radius: 6px;
`;

const _Center = styled.div`
  display: flex;
  justify-content: center;
`;

const _Contents = styled.div`
  height: calc(100% - 134px);
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #666;
`;

const _ConfigWrapper = styled.div`
  height: 100%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    background: inherit;
  }
  &::-webkit-scrollbar-thumb {
    background: ${variable.orange};
    border: 1px solid #d86405;
    border-radius: 10px;
  }
  > .btn {
    display: block;
    margin: 30px auto 0;
  }
`;
