import { VFC, memo } from 'react';
import styled from 'styled-components';

type props = {
  //
};

export const PlayerInfo: VFC<props> = memo((props) => {
  // const {} = props
  return <_PlayerInfo></_PlayerInfo>;
});

const _PlayerInfo = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 200px;
  height: 400px;
  background: red;
`;
