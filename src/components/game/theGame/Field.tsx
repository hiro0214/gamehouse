import { VFC, memo } from 'react';
import styled from 'styled-components';
import { BaseCard } from './BaseCard';

type props = {
  //
};

export const Field: VFC<props> = memo((props) => {
  // const {} = props
  return (
    <_Field>
      <_BaseCardTop>
        <BaseCard from={'100'} />
        <BaseCard from={'100'} />
      </_BaseCardTop>
      <_BaseCardBottom>
        <BaseCard from={'1'} />
        <BaseCard from={'1'} />
      </_BaseCardBottom>
    </_Field>
  );
});

const _Field = styled.div`
  display: flex;
  width: 600px;
  height: 600px;
`;

const _BaseCardTop = styled.div`
  display: flex;
  gap: 35px;
`;

const _BaseCardBottom = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 35px;
  margin-left: 35px;
`;
