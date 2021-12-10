import { VFC, memo } from 'react';
import styled from 'styled-components';
import { variable } from '../../../variable';

type props = {
  num: number;
  isHide?: boolean;
  onclick?: () => void;
  selected?: boolean;
};

export const Hand: VFC<props> = memo((props) => {
  const { num, isHide, onclick, selected } = props;

  const getHandClassName = (num: number): string => {
    return num === 0 ? 'empty' : num % 2 === 0 ? 'black' : 'white';
  };

  return (
    <>
      {isHide ? (
        <_Hand className={getHandClassName(num)}></_Hand>
      ) : (
        <_Hand onClick={onclick} className={`${selected && 'isActive'} ${getHandClassName(num)}`}>
          {num}
        </_Hand>
      )}
    </>
  );
});

const _Hand = styled.div`
  width: 100%;
  height: 100%;
  line-height: 50px;
  font-size: 20px;
  font-weight: bold;
  border: 1px solid #666666;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
  transition: outline 0.1s, box-shadow 0.1s;
  &.black {
    color: #eee;
    background: #333;
  }
  &.white {
    background: #fff;
  }
  &.empty {
    font-size: 0;
    background: #ccc;
  }
  &.isActive {
    outline: solid 2px ${variable.green};
    box-shadow: 0 0 4px 2px rgba(34, 34, 34, 0.3);
  }
`;
