import { VFC, memo } from 'react';
import styled from 'styled-components';
import { variable } from '../../../variable';
import { Card } from './Card';

type props = {
  cards: number[];
  isDisabled?: boolean;
  isReverse?: boolean;
  isAnimate?: boolean;
  onclick: () => void;
};

const cardPosDiff = 40;

export const FieldCards: VFC<props> = memo((props) => {
  const { cards, isDisabled, isReverse, isAnimate, onclick } = props;

  const getClassName = (isDisabled?: boolean, isReverse?: boolean, isAnimate?: boolean) => {
    let name = '';
    if (isDisabled) name += 'is-disabled';
    if (isReverse) name += ' is-reverse';
    if (isAnimate) name += ' is-animate';

    return name;
  };

  return (
    <_FieldCards className={getClassName(isDisabled, isReverse, isAnimate)} onClick={onclick}>
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
  overflow-y: hidden;
  cursor: pointer;
  &::after {
    content: '';
    transition: background-color .1s;
  }
  &:hover {
    outline: 2px solid ${variable.blue};
  }
  &.is-disabled {
    pointer-events: none !important;
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      z-index: 5;
      width: 100%;
      height: 100%;
      border-radius: 8px;
      background: #00000060;
    }
  }
  &.is-reverse {
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
    &.is-animate {
      > div {
        transition: transform .4s;
        transform: translateY(40px);
      }
    }
  }
  &:not(.is-reverse) {
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
    &.is-animate {
      > div {
        transition: transform .4s;
        transform: translateY(-40px);
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
