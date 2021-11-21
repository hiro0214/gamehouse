import { VFC, memo, useState, ChangeEvent, useEffect } from 'react';
import styled from 'styled-components';
import { useCurrentConfig } from '../../hooks/useCurrentConfig';
import { variable } from '../../variable';
import { Heading } from '../atoms/Heading';
import { Select } from '../atoms/Select';

const option = ['クーロンタクティクス', 'Hanabi', 'other'];

export const GameConfig: VFC = memo(() => {
  const [currentGame, setCurrentGame] = useState(option[0]);
  const { currentConfig, setConfig } = useCurrentConfig();

  const onChangeValue = (e: ChangeEvent<HTMLSelectElement>) => {
    setCurrentGame(e.target.value);
  };

  useEffect(() => {
    setConfig(currentGame);
  }, [currentGame]);

  return (
    <_Container>
      <Heading text={'Setting'} size={'2'}></Heading>
      <_Center>
        <Select
          options={option}
          hdg={'ゲーム'}
          value={currentGame}
          onChange={onChangeValue}
        ></Select>
      </_Center>
      <_Contents>{currentConfig}</_Contents>
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
  height: calc(100% - 132px);
  margin-top: 20px;
  padding-top: 10px;
  border-top: 1px solid #666;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    background: inherit;
  }
  &::-webkit-scrollbar-thumb {
    background: ${variable.orange};
    border: 1px solid #d86405;
    border-radius: 10px;
  }
`;
