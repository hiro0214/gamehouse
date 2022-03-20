import { VFC, memo, useState } from 'react';
import styled from 'styled-components';
import { Card } from './Card';

type props = {
  hands: number[];
};

export const MyHand: VFC<props> = memo((props) => {
  const { hands } = props;
  const [selectedHand, setSelectedHand] = useState<number | null>(null);

  return (
    <_MyHand>
      <p style={{ fontWeight: 'bold' }}>あなたの手札</p>
      <_Hands>
        {hands.map((hand, i) => (
          <Card
            key={hand}
            num={hand}
            selected={selectedHand === i ? true : false}
            onclick={() => setSelectedHand(i)}
          />
        ))}
      </_Hands>
    </_MyHand>
  );
});

const _MyHand = styled.div`
  width: 100%;
  margin-top: 30px;
`;

const _Hands = styled.ul`
  display: flex;
  flex-wrap: wrap;
  height: 444px;
  gap: 20px;
  margin-top: 10px;
  padding: 20px 0 20px 20px;
  border: 2px solid #999;
  background: #fff8dccc;
  border-radius: 6px;
`;
