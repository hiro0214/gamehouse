import { VFC, memo, ReactNode } from 'react';
import styled from 'styled-components';

type props = {
  children: ReactNode;
};

export const Contents: VFC<props> = memo((props) => {
  const { children } = props;

  return <_Container>{children}</_Container>;
});

const _Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 100vh;
`;
