import { memo, ReactNode, VFC } from 'react';
import styled from 'styled-components';

type props = {
  children: ReactNode;
};

export const CommonBackground: VFC<props> = memo((props) => {
  const { children } = props;

  return <_Background>{children}</_Background>;
});

const _Background = styled.div`
  background-image: url('/assets/images/bg_common.jpg');
  background-size: 600px auto;
  background-repeat: repeat;
`;
