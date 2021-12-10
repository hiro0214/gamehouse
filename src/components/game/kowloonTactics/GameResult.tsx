import { VFC, memo } from 'react';
import styled from 'styled-components';
import { useToLobby } from '../../../hooks/useToLobby';
import { variable } from '../../../variable';
import { Button } from '../../atoms/Button';

type result = 'WIN' | 'LOSE' | 'DRAW';

type props = {
  result: result;
};

export const GameResult: VFC<props> = memo((props) => {
  const { result } = props;
  const { toLobby } = useToLobby();

  const getClassName = (result: result) => {
    const className = result === 'WIN' ? 'win' : result === 'LOSE' ? 'lose' : 'draw';

    return className;
  };

  const backToLobby = () => toLobby();

  return (
    <_Container>
      <_Result className={getClassName(result)}>{result}</_Result>
      <Button label={'ロビーに戻る'} onclick={backToLobby} color={'teal'} />
    </_Container>
  );
});

const _Container = styled.div`
  width: 332px;
  min-height: 244px;
  padding: 20px;
  background: #edf2f7;
  border: 1px solid #666666;
  border-radius: 10px;
  box-shadow: 0 0 6px 4px #33333333;
  text-align: center;
  > .btn {
    width: 100%;
    margin-top: 90px;
  }
`;

const _Result = styled.div`
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  &.win {
    color: ${variable.red};
  }
  &.lose {
    color: ${variable.blue};
  }
  &.draw {
    color: ${variable.gray[1]};
  }
`;
