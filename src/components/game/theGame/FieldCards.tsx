import { VFC, memo } from 'react';
import styled from 'styled-components';
import { variable } from '../../../variable';
import { Card } from './Card';

type props = {
  cards: number[];
  isReverse?: boolean;
  onclick: () => void;
};

const cardPosDiff = 40;

export const FieldCards: VFC<props> = memo((props) => {
  const { cards, isReverse, onclick } = props;

  return (
    <_FieldCards className={isReverse ? 'reverse' : ''} onClick={onclick}>
      {cards.map((card) => (
        <Card key={card} num={card} />
      ))}
    </_FieldCards>
  );
});

const _FieldCards = styled.div`
  position: relative;
  height: 348px;
  outline: 1px dotted #000;
  border-radius: 8px;
  background: #f0f8ff;
  cursor: pointer;
  &:hover {
    outline: 2px solid ${variable.blue};
  }
  &.reverse {
    margin-bottom: 30px;
    > div {
      &:nth-of-type(1) {
        bottom: 0;
      }
      &:nth-of-type(2) {
        bottom ${cardPosDiff}px;
      }
      &:nth-of-type(3) {
        bottom ${cardPosDiff * 2}px;
      }
      &:nth-of-type(4) {
        bottom ${cardPosDiff * 3}px;
      }
      &:nth-of-type(5) {
        bottom ${cardPosDiff * 4}px;
      }
    }
  }
  &:not(.reverse) {
    margin-top: 30px;
    > div {
      &:nth-of-type(1) {
        top: 0;
      }
      &:nth-of-type(2) {
        top ${cardPosDiff}px;
      }
      &:nth-of-type(3) {
        top ${cardPosDiff * 2}px;
      }
      &:nth-of-type(4) {
        top ${cardPosDiff * 3}px;
      }
      &:nth-of-type(5) {
        top ${cardPosDiff * 4}px;
      }
    }
  }
  > div {
    position: absolute;
    width: 100%;
    &:nth-of-type(1) {
      z-index: 1;
    }
    &:nth-of-type(2) {
      z-index: 2;
    }
    &:nth-of-type(3) {
      z-index: 3;
    }
    &:nth-of-type(4) {
      z-index: 4;
    }
    &:nth-of-type(5) {
      z-index: 5;
    }
  }
`;
