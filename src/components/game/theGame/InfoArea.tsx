import { VFC, memo } from 'react';
import styled from 'styled-components';

type props = {
  //
};

export const InfoArea: VFC<props> = memo((props) => {
  // const {} = props
  return (
    <_InfoArea>
      <p>
        DECK：
        <span>98</span>枚
      </p>
      <p>
        SCORE：
        <span>0</span>
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
