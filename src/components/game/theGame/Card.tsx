import { VFC, memo } from 'react';
import styled from 'styled-components';
// import cardImg from '../../../images/img_skull_2.png';

type props = {
  num: number;
};

export const Card: VFC<props> = memo((props) => {
  const { num } = props;

  return (
    <_Card>
      <span className="top left">{num}</span>
      <span className="top right">{num}</span>
      <span className="center">{num}</span>
      <span className="bottom left">{num}</span>
      <span className="bottom right">{num}</span>
    </_Card>
  );
});

// background-image: url(${cardImg});
const _Card = styled.div`
  position: relative;
  width: calc(100% / 3 - 20px);
  height: 188px;
  color: #fff;
  border: 1px solid #ccc;
  background-image: url('/assets/images/img_skull_2.png');
  background-size: 100% auto;
  background-repeat: no-repeat;
  border-radius: 8px;
  > span {
    position: absolute;
    font-weight: bold;
    line-height: 1;
    font-size: 18px;
    &.center {
      top: 50%;
      left: 0;
      right: 0;
      transform: translateY(-50%);
      font-size: 50px;
      text-align: center;
    }
    &.top {
      top: 6px;
    }
    &.left {
      left: 8px;
    }
    &.right {
      right: 8px;
    }
    &.bottom {
      bottom: 6px;
    }
  }
`;
