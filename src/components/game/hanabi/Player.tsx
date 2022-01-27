import { VFC, memo } from 'react';
import styled from 'styled-components';
import { Hand } from './Hand';
import { hand } from '../../../../types/game/hanabi';
import { useMyInfo } from '../../../providers/UserInfoProvider';

type props = {
  name: string;
  hands: hand[];
  onclick: (e: React.MouseEvent<HTMLElement>) => void;
};

export const Player: VFC<props> = memo((props) => {
  const { name, hands, onclick } = props;
  const { myInfo } = useMyInfo();

  return (
    <_Container className={'player'}>
      <_Hands>
        {hands.map((hand, i) => (
          <Hand
            key={i}
            color={hand.color}
            num={hand.num}
            colorHint={hand.colorHint}
            numHint={hand.numHint}
            isReverse={name === myInfo.name}
            onclick={onclick}
          />
        ))}
      </_Hands>
      <_Band>➡︎ {name}</_Band>
    </_Container>
  );
});

const _Container = styled.div``;

const _Hands = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: row-reverse;
  padding: 0 20px;
  .hand:not(:first-child) {
    margin-right: 10px;
  }
`;

const _Band = styled.div`
  width: 100%;
  padding: 2px 8px;
  font-size: 14px;
  color: #fff;
  background: #000;
`;
