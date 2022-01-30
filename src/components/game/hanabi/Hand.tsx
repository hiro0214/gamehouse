import { VFC, memo } from 'react';
import styled from 'styled-components';
import { variable } from '../../../variable';

type props = {
  color: string;
  num: number;
  colorHint?: boolean;
  numHint?: boolean;
  isReverse?: boolean;
  onclick?: (e: React.MouseEvent<HTMLElement>) => void;
};

export const Hand: VFC<props> = memo((props) => {
  const { color, num, colorHint, numHint, isReverse, onclick } = props;

  const getHint = () => {
    let name = '';
    if (colorHint) name += `hint_${color}`;
    if (numHint) name = name === '' ? `hint_${num}` : `${name} hint_${num}`;

    return name;
  };

  return (
    <>
      {isReverse ? (
        <_Hand
          className={`reverse hand ${(colorHint || numHint) && getHint()}`}
          onClick={onclick}
        />
      ) : (
        <_Hand className={`${color} hand ${(colorHint || numHint) && getHint()}`} onClick={onclick}>
          {num !== 0 && num}
        </_Hand>
      )}
    </>
  );
});

const _Hand = styled.div`
  width: 60px;
  height: 120px;
  padding-top: 5px;
  font-size: 36px;
  font-weight: bold;
  background: #becef1;
  border: 2px solid ${variable.gray[1]};
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  transition: border-color 0.2s;
  &.red {
    color: ${variable.red};
    text-shadow: 1px 1px 0px #8d0000;
  }
  &.blue {
    color: ${variable.blue};
    text-shadow: 1px 1px 0px #004b92;
  }
  &.yellow {
    color: ${variable.yellow};
    text-shadow: 1px 1px 0px #9c7a00;
  }
  &.green {
    color: ${variable.green};
    text-shadow: 1px 1px 0px #007436;
  }
  &.white {
    color: #fff;
    text-shadow: 1px 1px 0px #333;
  }
  &.purple {
    color: ${variable.purple};
    text-shadow: 1px 1px 0px #5826bd;
  }
  &.reverse {
    background-image: url('/assets/images/bg_hanabi_hand.png');
    background-size: 100% auto;
    background-repeat: no-repeat;
  }
  &.selected {
    border-color: #fff;
  }
  &[class*='hint'] {
    position: relative;
    transition: top 0.2s;
    &::before {
      content: '';
      position: absolute;
      top: -30px;
      left: -1px;
      width: 100%;
      height: 30px;
      font-size: 18px;
      font-weight: bold;
      text-shadow: none;
      color: ${variable.black};
      background: #aaaaaacc;
      border-radius: 8px 8px 0 0;
      border: solid 1px #666;
      border-bottom: none;
      pointer-events: none;
    }
  }
  &.hint_red::before {
    background: #e53e3ecc;
  }
  &.hint_blue::before {
    background: #3182cecc;
  }
  &.hint_yellow::before {
    background: #ecc94bcc;
  }
  &.hint_green::before {
    background: #38a169cc;
  }
  &.hint_white::before {
    background: #ffffffcc;
  }
  &.hint_purple::before {
    background: #9f7aeacc;
  }
  &.hint_1::before {
    content: '1';
  }
  &.hint_2::before {
    content: '2';
  }
  &.hint_3::before {
    content: '3';
  }
  &.hint_4::before {
    content: '4';
  }
  &.hint_5::before {
    content: '5';
  }
`;
