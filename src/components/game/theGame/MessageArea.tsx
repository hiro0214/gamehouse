import { VFC, memo } from 'react';
import styled from 'styled-components';
import { variable } from '../../../variable';
import { messageStatusType } from '../../../../types/game/theGame';

type props = {
  status: messageStatusType;
  remainingHand: number;
  turnFinish: () => void;
  turnContinue: () => void;
};

export const MessageArea: VFC<props> = memo((props) => {
  const { status, remainingHand, turnFinish, turnContinue } = props;

  return (
    <_MessageArea>
      {status === 'continue' ? (
        <_BtnArea>
          <p>まだカードを出しますか?</p>
          <button style={{ backgroundColor: variable.gray[1] }} onClick={turnFinish}>
            出さない
          </button>
          <button style={{ backgroundColor: variable.green[0] }} onClick={turnContinue}>
            出す
          </button>
        </_BtnArea>
      ) : (
        <_Message>
          {remainingHand <= 0 ? '手札からカードを出してください' : `あと${remainingHand}枚のカードを出してください`}
        </_Message>
      )}
    </_MessageArea>
  );
});

const _MessageArea = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  z-index: 9;
  top: 70px;
`;

const _Message = styled.p`
  width: 400px;
  margin: 0 auto;
  padding: 10px 0;
  font-weight: bold;
  color: #fff;
  background: #000000b2;
  border-radius: 34px;
  text-align: center;
  transform: scale(0.8);
  animation: scaleIn 0.2s forwards;
  @keyframes scaleIn {
    to {
      transform: scale(1);
    }
  }
`;

const _BtnArea = styled.div`
  text-align: center;
  > p {
    margin-bottom: 15px;
    font-weight: bold;
  }
  > button {
    min-width: 130px;
    padding: 10px 0;
    color: #fff;
    font-weight: bold;
    border-radius: 22px;
    + button {
      margin-left: 40px;
    }
  }
`;
