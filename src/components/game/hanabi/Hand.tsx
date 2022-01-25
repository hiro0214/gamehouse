import { VFC, memo } from 'react';
import styled from 'styled-components';
import { variable } from '../../../variable';

type props = {
  color: string;
  num: number;
  isReverse?: boolean;
};

export const Hand: VFC<props> = memo((props) => {
  const { color, num, isReverse } = props;
  return (
    <>
      {isReverse ? (
        <_Hand className={'reverse hand'} />
      ) : (
        <_Hand className={`${color} hand`}>{num !== 0 && num}</_Hand>
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
`;
