import { VFC, memo } from 'react';
import styled from 'styled-components';
import { Hand } from './Hand';

type props = {
  hands: number[];
  isHide: boolean;
};

export const FieldHand: VFC<props> = memo((props) => {
  const { hands, isHide } = props;
  while (hands.length < 9) hands.push(0);

  return (
    <_Container>
      {hands.map((hand, i) => (
        <Hand key={i} num={hand} isHide={isHide} />
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
