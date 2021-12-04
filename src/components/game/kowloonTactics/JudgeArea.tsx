import { VFC, memo } from 'react';
import styled from 'styled-components';
import { variable } from '../../../variable';

type judge = 'red' | 'blue' | 'draw' | 'empty';

type props = {
  judgeArray: judge[];
};

export const JudgeArea: VFC<props> = memo((props) => {
  const { judgeArray } = props;
  const copyArray = [...judgeArray];

  while (copyArray.length < 9) copyArray.push('empty');

  return (
    <_Container>
      <_JudgeArea className={'red'}>
        {copyArray.map((judge, i) => (
          <div key={i} className={judge} />
        ))}
      </_JudgeArea>
      <_JudgeArea className={'blue'}>
        {copyArray.map((judge, i) => (
          <div key={i} className={judge} />
        ))}
      </_JudgeArea>
    </_Container>
  );
});

const _Container = styled.div`
  display: flex;
  width: 50px;
  pointer-events: none;
`;

const _JudgeArea = styled.div`
  width: 50%;
  display: grid;
  grid-template-columns: repeat(1, 25px);
  grid-template-rows: repeat(9, 50px);
  gap: 10px;
  > div {
    opacity: 0.4;
  }
  &.red > div {
    background: ${variable.red};
    &.red {
      opacity: 1;
      box-shadow: 0 0 6px 1px rgb(229 62 62 / 70%);
    }
  }
  &.blue > div {
    background: ${variable.blue};
    &.blue {
      opacity: 1;
      box-shadow: 0 0 6px 1px rgb(49 130 206 / 70%);
    }
  }
`;
