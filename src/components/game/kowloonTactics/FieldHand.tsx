import { VFC, memo } from 'react';
import styled from 'styled-components';
import { Hand } from './Hand';

type props = {
  hands: number[];
  isHide: boolean;
  isFinish: boolean;
};

export const FieldHand: VFC<props> = memo((props) => {
  const { hands, isHide, isFinish } = props;
  const copyHands = [...hands];

  while (copyHands.length < 9) copyHands.push(0);

  return (
    <_Container>
      {copyHands.map((hand, i) => (
        <Hand key={i} num={hand} isHide={isFinish ? false : isHide} />
      ))}
    </_Container>
  );
});

const _Container = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 50px);
  grid-template-rows: repeat(9, 50px);
  gap: 10px;
`;
