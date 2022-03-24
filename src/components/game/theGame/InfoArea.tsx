import { VFC, memo } from 'react';
import styled from 'styled-components';

type props = {
  deck: number;
  score: number;
};

export const InfoArea: VFC<props> = memo((props) => {
  const { deck, score } = props;

  return (
    <_InfoArea>
      <p>
        DECK：
        <span>{deck}</span>枚
      </p>
      <p>
        SCORE：
        <span>{score}</span>
      </p>
    </_InfoArea>
  );
});

const _InfoArea = styled.div`
  > p {
    font-size: 20px;
    font-weight: bold;
  }
`;
