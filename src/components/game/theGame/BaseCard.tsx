import { VFC, memo } from 'react';
import styled from 'styled-components';
// import cardImg from '../../../images/img_skull_1.png';

type props = {
  from: '1' | '100';
};

export const BaseCard: VFC<props> = memo((props) => {
  const { from } = props;
  return (
    <_Card className={from === '1' ? 'from1' : 'from100'}>
      {from === '1' && (
        <>
          <span className="numFrom">1</span>
          <span className="numTo">100</span>
        </>
      )}
      {from === '100' && (
        <>
          <span className="numFrom">100</span>
          <span className="numTo">1</span>
        </>
      )}
    </_Card>
  );
});

// background-image: url(${cardImg});
const _Card = styled.div`
  position: relative;
  width: 122px;
  height: 188px;
  color: #fff;
  border: 1px solid #ccc;
  background-image: url('/assets/images/img_skull_1.png');
  background-size: 100% auto;
  background-repeat: no-repeat;
  border-radius: 8px;
  text-align: center;
  span {
    display: inline-block;
    position: absolute;
    left: 0;
    right: 0;
    font-weight: bold;
  }
  &.from1 {
    transform: rotate(180deg);
    span {
      transform: rotate(-180deg);
      &.numFrom {
        top: 10px;
        font-size: 40px;
      }
      &.numTo {
        bottom: 5px;
        font-size: 24px;
      }
    }
  }
  &.from100 {
    span {
      &.numFrom {
        top: 10px;
        font-size: 40px;
      }
      &.numTo {
        bottom: 5px;
        font-size: 24px;
      }
    }
  }
`;
