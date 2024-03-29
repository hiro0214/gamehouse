import { VFC, memo, useEffect, SetStateAction, Dispatch } from 'react';
import styled from 'styled-components';
import { gameDataType, gameStatusType } from '../../../../types/game/fakeArtist';
import { variable } from '../../../variable';

type props = {
  gameData: gameDataType;
  setCanvas: Dispatch<SetStateAction<HTMLCanvasElement | null>>;
  color: string;
  disable: boolean;
  status: gameStatusType;
  isFake: boolean;
  onclickAnswer: (index: number) => void;
};

let isDraw = false,
  offsetX = 0,
  offsetY = 0;

export const Canvas: VFC<props> = memo((props) => {
  const { gameData, setCanvas, color, disable, status, isFake, onclickAnswer } = props;

  useEffect(() => {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    const canvasContext = canvas.getContext('2d') as CanvasRenderingContext2D;

    canvasContext.lineCap = 'round';
    canvasContext.lineWidth = 4;
    canvasContext.strokeStyle = color;

    canvas.addEventListener('mousedown', (e: MouseEvent) => {
      isDraw = true;
      offsetX = e.offsetX;
      offsetY = e.offsetY;
    });

    canvas.addEventListener('mousemove', (e: MouseEvent) => {
      if (!isDraw) return;

      const toX = e.offsetX;
      const toY = e.offsetY;
      drawLine(canvasContext, offsetX, offsetY, toX, toY);
      offsetX = toX;
      offsetY = toY;
    });

    canvas.addEventListener('mouseout', () => {
      if (!isDraw) return;

      isDraw = false;
      setCanvas(canvas);
    });

    canvas.addEventListener('mouseup', () => {
      if (!isDraw) return;

      isDraw = false;
      setCanvas(canvas);
    });

    const drawLine = (
      context: CanvasRenderingContext2D,
      startX: number,
      startY: number,
      endX: number,
      endY: number
    ) => {
      context.beginPath();
      context.moveTo(startX, startY);
      context.lineTo(endX, endY);
      context.stroke();
    };
  }, []);

  useEffect(() => {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    const canvasContext = canvas.getContext('2d') as CanvasRenderingContext2D;

    if (gameData.context.length) {
      const img = new Image();
      img.src = gameData.context;
      img.onload = () => canvasContext.drawImage(img, 0, 0);
    }
  }, [gameData.context]);

  return (
    <_Container>
      <_Canvas id="canvas" width={750} height={500} className={disable || status !== 'game' ? 'disable' : ''}></_Canvas>
      <_ThemeModal className={status === 'theme' ? 'is-active' : ''}>
        <p>
          お題を確認して下さい
          <br />
          10秒後にゲームが開始します
        </p>
      </_ThemeModal>
      <_CenterModal className={status === 'title' ? 'is-active' : ''}>
        {isFake ? (
          <p>
            お題を知っているフリをして
            <br />
            バレないように絵を描こう
          </p>
        ) : (
          <p>
            協力して絵を描こう
            <br />
            ただしエセ芸術家にお題がバレてはいけない
          </p>
        )}
      </_CenterModal>
      <_CenterModal style={{ animationDelay: '1s' }} className={status === 'vote' ? 'is-active' : ''}>
        <p>
          エセ芸術家だと思う人に
          <br />
          投票してください
        </p>
      </_CenterModal>
      {status === 'voted' && (
        <>
          <_CenterModal className={status === 'voted' ? 'is-active' : ''}>投票結果発表</_CenterModal>
          <_ResultModal>
            <p>最多投票者は...</p>
            <_UserName>{gameData.mostVote}</_UserName>
            <p style={{ marginTop: '50px' }}>エセ芸術家は...</p>
            <_UserName>{gameData.players[gameData.fakeMan].name}</_UserName>
          </_ResultModal>
          <_CenterModal className={status === 'voted' ? 'is-active' : ''} style={{ animationDelay: '15s' }}>
            {gameData.mostVote === gameData.players[gameData.fakeMan].name ? (
              <p>
                エセ芸術家が
                <br />
                お題を当てることができれば逆転勝利
              </p>
            ) : (
              <p>エセ芸術家の勝利!!</p>
            )}
          </_CenterModal>
        </>
      )}
      {status === 'reversal' && (
        <_AnswerListModal className={isFake ? '' : 'disable'}>
          <ul>
            {gameData.answerList.map((answer, i) => (
              <li key={answer} style={{ animationDelay: `${i * 0.1}s` }} onClick={() => onclickAnswer(i)}>
                {answer}
              </li>
            ))}
          </ul>
        </_AnswerListModal>
      )}
      {status === 'answer' && (
        <>
          <_AnswerModal>
            <div>
              <p className="hdg">エセ芸術家の回答</p>
              <p className="card">{gameData.answer}</p>
            </div>
            <div>
              <p className="hdg" style={{ marginTop: '50px' }}>
                正解
              </p>
              <p className="card">{gameData.theme}</p>
            </div>
          </_AnswerModal>
          <_CenterModal className="modal is-active">
            {gameData.answer === gameData.theme ? <p>エセ芸術家の勝利!!</p> : <p>芸術家の勝利!!</p>}
          </_CenterModal>
        </>
      )}
    </_Container>
  );
});

const _Container = styled.div`
  position: relative;
  width: 750px;
  height: 100%;
`;

const _Canvas = styled.canvas`
  background: #fff;
  border: 3px solid #ccc;
  border-radius: 6px;
  cursor: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAUGVYSWZNTQAqAAAACAACARIAAwAAAAEAAQAAh2kABAAAAAEAAAAmAAAAAAADoAEAAwAAAAEAAQAAoAIABAAAAAEAAAA2oAMABAAAAAEAAAA2AAAAAOGeALoAAAIwaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA1LjQuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIgogICAgICAgICAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDxleGlmOkNvbG9yU3BhY2U+MTwvZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+NjQ8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+NjQ8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KQ9JZ6AAAAi5JREFUaAXtmDFLxDAUx08HERcnUcHBUdD9FgcHZyflhlbcBHfh1rr5QXTxO7grOLk6OOriJA6iov/H9UHIpbZ3Se+9lAReX5Jr0v+v7yUX2uuNyhDuHpbDFkZd8V8LIPwa9oI69a3Doi4UKROM65/ov4b1Y6XLKsAYkDzBH8OiSlMS+wozQarqlKYXMDNND9E+gqksl1BVBePq5zQ9x7iv0lTCbUAciXVBNO0jQJVwN55g9AJUwu0HAFML9xAI7h3zrMLUlFMoabqmqu57wxy7aohKIYvwtKVXia7rf8bYrXIudjtckfYFBNQBuH5/xLg1SzydQdVsKCRu0q3/FmOWLagCbX4BauDojMii6vwV7rWPWhQpe5wKODpR2MJc7QL3zcHM4oLisaJwA6gkASzG5b/x+5lJU9b/g+J5xODqwD4AcTAllAo4igoLYU9/BX1PKJ5LLHIZAEy4J7Q3A0GpgKM3ewdbcUAV6GOR03qxyO1B/BLMLk02iqawYnBtQjG8OFzISDEUezG4bYTO3FBYUEgvBpclOL8dUzRy9PCQaWjPJQZHx6+05jyiKxa5LEXOb02myCGDgpfOpyWljb19h2yLpWXn/wpS5DxSVywtM4hOJ5QUOfeuS2k5mMdlloU+nZ/Aflp8qP1lusVHjU/d1pqjdZyPP262PaHhVEDxKwwFpwoqFJxKKF841VDTwkUBNSlcVFBN4aKEqoOLGqoKrhNQNlynoEy4nBtN/R9DgcbJNTnGfQAAAABJRU5ErkJggg==),
    pointer;
  &.disable {
    pointer-events: none;
  }
`;

const _ThemeModal = styled.div`
  position: absolute;
  top: 50%;
  left: 3px;
  transform: translateY(-50%);
  width: 100%;
  padding: 30px 0;
  opacity: 0;
  background: #333;
  text-align: center;
  pointer-events: none;
  transition: opacity 0.5s;
  &.is-active {
    opacity: 1;
  }
  > p {
    font-size: 18px;
    font-weight: bold;
    color: #fff;
    &::after {
      content: '';
      display: block;
      position: absolute;
      top: 50%;
      right: 200px;
      transform: translateY(-50%);
      width: 30px;
      height: 30px;
      background-image: url('data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2055%2060%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill%3A%23fff%3B%7D%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22%E3%83%AC%E3%82%A4%E3%83%A4%E3%83%BC_2%22%20data-name%3D%22%E3%83%AC%E3%82%A4%E3%83%A4%E3%83%BC%202%22%3E%3Cg%20id%3D%22Layer_1%22%20data-name%3D%22Layer%201%22%3E%3Cpolygon%20class%3D%22cls-1%22%20points%3D%2225%200%2025%2015%2040%2030%2025%2045%2025%2060%2055%2030%2025%200%22%2F%3E%3Cpolygon%20class%3D%22cls-1%22%20points%3D%220%200%200%2015%2015%2030%200%2045%200%2060%2030%2030%200%200%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E');
      background-size: 100% auto;
      background-repeat: no-repeat;
      animation: arrMove 1s infinite;
    }
  }
  @keyframes arrMove {
    85% {
      transform: translate(5px, -50%);
    }
    100% {
      transform: translate(0px, -50%);
    }
  }
`;

const _CenterModal = styled.div`
  position: absolute;
  top: 50%;
  left: 3px;
  right: 0;
  transform: translateY(-50%) scale(0.8);
  z-index: 5;
  width: 80%;
  padding: 30px 0;
  margin: auto;
  font-size: 18px;
  font-weight: bold;
  color: #ffff00;
  background: ${variable.teal};
  border-radius: 60px;
  opacity: 0;
  pointer-events: none;
  text-align: center;
  animation-duration: 4.8s;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
  &.is-active {
    animation-name: fadeIn;
  }
  @keyframes fadeIn {
    5%,
    95% {
      opacity: 1;
      transform: translateY(-50%) scale(1);
    }
    100% {
      opacity: 0;
      transform: translateY(-50%) scale(0.8);
    }
  }
`;

const _ResultModal = styled.div`
  position: absolute;
  top: calc(50% + 3px);
  left: 3px;
  transform: translateY(-50%);
  width: 100%;
  padding: 135px 0;
  background: #fff;
  border-radius: 4px;
  font-weight: bold;
  pointer-events: none;
  text-align: center;
  > p {
    &:nth-of-type(1),
    &:nth-of-type(3) {
      opacity: 0;
      transform: translateX(50px);
      animation: titleFade 0.4s forwards;
    }
    &:nth-of-type(1) {
      animation-delay: 5.5s;
    }
    &:nth-of-type(2) {
      animation-delay: 7.5s;
    }
    &:nth-of-type(3) {
      animation-delay: 9.5s;
    }
    &:nth-of-type(4) {
      animation-delay: 13s;
    }
  }
  @keyframes titleFade {
    to {
      opacity: 1;
      transform: translateX(0px);
    }
  }
`;

const _UserName = styled.p`
  display: inline-block;
  width: 250px;
  margin-top: 20px;
  padding: 10px 0;
  background: #ffedab;
  border: 1px solid ${variable.yellow};
  border-radius: 24px;
  transform: scale(0);
  animation: scaleIn 0.4s forwards;
  @keyframes scaleIn {
    to {
      transform: scale(1);
    }
  }
`;

const _AnswerListModal = styled.div`
  position: absolute;
  top: 3px;
  left: 3px;
  width: 100%;
  height: 100%;
  background: #fff;
  &.disable {
    pointer-events: none;
  }
  > ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    flex-direction: column;
    gap: 10px 40px;
    width: 70%;
    height: 100%;
    margin: 0 auto;
    padding: 35px 0;
    > li {
      width: calc(50% - 20px);
      padding: 5px 0;
      font-weight: bold;
      background: #ffedab;
      border: 2px solid ${variable.yellow};
      border-radius: 18px;
      text-align: center;
      cursor: pointer;
      transform: scale(0);
      animation: answerScale 0.4s forwards;
    }
    @keyframes answerScale {
      to {
        transform: scale(1);
      }
    }
  }
`;

const _AnswerModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: calc(50% + 3px);
  left: 3px;
  transform: translateY(-50%);
  width: 100%;
  padding: 98px 0;
  background: #fff;
  border-radius: 4px;
  font-weight: bold;
  text-align: center;
  .hdg {
    width: 200px;
    margin-bottom: 15px;
    padding: 10px 0;
    background: #ffea00;
    border-radius: 22px;
  }
  .card {
    min-width: 200px;
    padding: 20px 0;
    background: #ffedab;
    border: 2px solid ${variable.yellow};
    border-radius: 4px;
    text-align: center;
  }
  > div {
    &:nth-of-type(1),
    &:nth-of-type(2) {
      transform: scale(0);
      animation: blockScale 0.3s forwards;
    }
    &:nth-of-type(1) {
      animation-delay: 1s;
    }
    &:nth-of-type(2) {
      animation-delay: 4s;
    }
  }
  @keyframes blockScale {
    to {
      transform: scale(1);
    }
  }
  + .modal {
    animation-delay: 7s;
  }
`;
