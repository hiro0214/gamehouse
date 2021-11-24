import { VFC, memo, useState, ChangeEvent, useEffect } from 'react';
import styled from 'styled-components';
import { useCurrentConfig } from '../../hooks/useCurrentConfig';
import { useMyInfo } from '../../providers/UserInfoProvider';
import { socket } from '../../socket';
import { variable } from '../../variable';
import { Button } from '../atoms/Button';
import { Heading } from '../atoms/Heading';
import { Select } from '../atoms/Select';

const options = ['クーロンタクティクス', 'Hanabi', 'other'];

export const GameConfig: VFC = memo(() => {
  const [currentGame, setCurrentGame] = useState<string | null>(null);
  const { myInfo } = useMyInfo();
  const { currentConfig, setConfig } = useCurrentConfig();

  const onChangeValue = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value.indexOf('--') === -1) {
      socket.emit('common:setCurrentGame', value);
    } else {
      socket.emit('common:setCurrentGame', null);
    }
  };

  const onclickGameStart = () => {
    console.log('Game Start!');
  };

  useEffect(() => {
    socket.on('common:getCurrentGame', (currentGame: string) => {
      setCurrentGame(currentGame);
      setConfig(currentGame);
    });
    socket.on('common:setCurrentGame', (currentGame: string) => {
      setCurrentGame(currentGame);
      setConfig(currentGame);
    });

    socket.emit('common:getCurrentGame');
  }, []);

  return (
    <_Container>
      <Heading text={'Setting'} size={'2'}></Heading>
      <_Center>
        <Select
          options={options}
          hdg={'ゲーム'}
          value={currentGame ? currentGame : ''}
          onChange={onChangeValue}
          disabled={myInfo.isAdmin}
        ></Select>
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
