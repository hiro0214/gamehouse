import { VFC, memo } from 'react';
import styled from 'styled-components';
import { BaseCard } from './BaseCard';
import { FieldCards } from './FieldCards';

type props = {
  fieldCards: number[][];
  selectedHand: number | false;
  playCard: (index: number) => void;
  isAnimate: number | null;
};

export const Field: VFC<props> = memo((props) => {
  const { fieldCards, selectedHand, playCard, isAnimate } = props;

  const getLastItem = (arr: number[]) => arr.slice(-1)[0];

  const checkDisable = (field: number, select: number | false, reverse?: boolean) => {
    // カードを出すことができない時だけ true
    let flag = false;

    if (select === false) flag = false;
    else if (reverse) {
      if (select === field - 10) flag = false;
      else if (select < field) flag = true;
    } else {
      if (select === field + 10) flag = false;
      else if (select > field) flag = true;
    }

    return flag;
  };

  return (
    <_Field>
      <_FieldColumn>
        <BaseCard from={'100'} />
        <FieldCards
          cards={fieldCards[0]}
          isDisabled={checkDisable(getLastItem(fieldCards[0]), selectedHand)}
          isAnimate={isAnimate === 0 && true}
          onclick={() => playCard(0)}
        />
      </_FieldColumn>
      <_FieldColumn>
        <BaseCard from={'100'} />
        <FieldCards
          cards={fieldCards[1]}
          isDisabled={checkDisable(getLastItem(fieldCards[1]), selectedHand)}
          isAnimate={isAnimate === 1 && true}
          onclick={() => playCard(1)}
        />
      </_FieldColumn>
      <_FieldColumn className="reverse">
        <BaseCard from={'1'} />
        <FieldCards
          cards={fieldCards[2]}
          isDisabled={checkDisable(getLastItem(fieldCards[2]), selectedHand, true)}
          isReverse={true}
          isAnimate={isAnimate === 2 && true}
          onclick={() => playCard(2)}
        />
      </_FieldColumn>
      <_FieldColumn className="reverse">
        <BaseCard from={'1'} />
        <FieldCards
          cards={fieldCards[3]}
          isDisabled={checkDisable(getLastItem(fieldCards[3]), selectedHand, true)}
          isReverse={true}
          isAnimate={isAnimate === 3 && true}
          onclick={() => playCard(3)}
        />
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
