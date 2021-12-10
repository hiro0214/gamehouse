import { VFC, memo, useState, useEffect } from 'react';
import styled from 'styled-components';
import { socket } from '../../../socket';

export const CheckAnimate: VFC = memo(() => {
  const [isCheckAnimate, setIsCheckAnimate] = useState(false);

  useEffect(() => {
    socket.on('kowloonTactics:checkAnimate', () => {
      setIsCheckAnimate(true);
      setTimeout(() => setIsCheckAnimate(false), 4000);
    });
  }, []);

  return (
    <>
      {isCheckAnimate && (
        <_Container>
          <span>C</span>
          <span>h</span>
          <span>e</span>
          <span>c</span>
          <span>k</span>
          <span>!</span>
        </_Container>
      )}
    </>
  );
});

const _Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  > span {
    display: inline-block;
    font-size: 50px;
    font-weight: bold;
    color: #fff;
    text-shadow: 3px 2px 0 #333;
    letter-spacing: 0.1em;
    animation-name: jump;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    &:nth-child(2) {
      animation-delay: 0.1s;
    }
    &:nth-child(3) {
      animation-delay: 0.2s;
    }
    &:nth-child(4) {
      animation-delay: 0.3s;
    }
    &:nth-child(5) {
      animation-delay: 0.4s;
    }
    &:nth-child(6) {
      animation-delay: 0.5s;
    }
  }

  @keyframes jump {
    0%,
    100% {
      transform: translateY(0) scale(1);
    }
    30% {
      transform: translateY(-25%);
    }
    50% {
      transform: scale(1);
    }
    90% {
      transform: translateY(0) scale(1.2, 0.8);
    }
  }
`;
