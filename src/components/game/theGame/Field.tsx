import { VFC, memo } from 'react';
import styled from 'styled-components';
import { BaseCard } from './BaseCard';
import { FieldCards } from './FieldCards';

type props = {
  fieldCards: number[][];
};

export const Field: VFC<props> = memo((props) => {
  const { fieldCards } = props;

  return (
    <_Field>
      <_FieldColumn>
        <BaseCard from={'100'} />
        <FieldCards cards={fieldCards[0]} />
      </_FieldColumn>
      <_FieldColumn>
        <BaseCard from={'100'} />
        <FieldCards cards={fieldCards[1]} />
      </_FieldColumn>
      <_FieldColumn className="reverse">
        <BaseCard from={'1'} />
        <FieldCards cards={fieldCards[2]} isReverse={true} />
      </_FieldColumn>
      <_FieldColumn className="reverse">
        <BaseCard from={'1'} />
        <FieldCards cards={fieldCards[3]} isReverse={true} />
      </_FieldColumn>
    </_Field>
  );
});

const _Field = styled.div`
  display: flex;
  justify-content: space-between;
  width: 600px;
`;

const _FieldColumn = styled.div`
  display: flex;
  flex-direction: column;
  &.reverse {
    flex-direction: column-reverse;
  }
`;
