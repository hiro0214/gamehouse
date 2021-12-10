import { VFC, memo, useState, useEffect } from 'react';
import styled from 'styled-components';
import { useMyInfo } from '../../../providers/UserInfoProvider';
import { socket } from '../../../socket';
import { Button } from '../../atoms/Button';
import { Hand } from './Hand';

type props = {
  hands: number[];
  turn: boolean;
  isPlayer: boolean;
  isHide: boolean;
};

export const HandArea: VFC<props> = memo((props) => {
  const { hands, turn, isPlayer, isHide } = props;
  const { myInfo } = useMyInfo();
  const [isSelected, setIsSelected] = useState(false);
  const [isIndex, setIsIndex] = useState<number | null>(null);

  useEffect(() => {
    isIndex !== null ? setIsSelected(true) : setIsSelected(false);
  }, [isIndex]);

  const selectHand = (index: number) => setIsIndex(index);

  const playCard = () => {
    setIsIndex(null);
    socket.emit('kowloonTactics:selectHand', [myInfo, isIndex]);
  };

  return (
    <_Container>
      <_HandArea className={!isPlayer ? 'disabed' : ''}>
        {hands.map((hand, i) =>
          isHide ? (
            <Hand key={i} num={hand} isHide={true} />
          ) : (
            <Hand
              key={i}
              num={hand}
              onclick={() => selectHand(i)}
              selected={isIndex === i && true}
            />
          )
        )}
      </_HandArea>
      {isPlayer && turn && (
        <Button label={'カードを出す'} onclick={playCard} color={'teal'} isDisabled={!isSelected} />
      )}
    </_Container>
  );
});

const _Container = styled.div`
  width: 332px;
  min-height: 244px;
  padding: 20px;
  background: #edf2f7;
  border: 1px solid #666666;
  border-radius: 10px;
  box-shadow: 0 0 6px 4px #33333333;
  text-align: center;
  > .btn {
    width: 100%;
    margin-top: 50px;
  }
`;

const _HandArea = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 50px);
  grid-template-rows: repeat(2, 50px);
  gap: 10px;
  width: 100%;
  &.disabed {
    pointer-events: none;
  }
`;
