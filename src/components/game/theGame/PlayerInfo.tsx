import { VFC, memo } from 'react';
import styled from 'styled-components';
import { Profile } from '../../molucules/Profile';
import { playerHandType } from '../../../../types/game/theGame';

type props = {
  playerList: playerHandType[];
};

export const PlayerInfo: VFC<props> = memo((props) => {
  const { playerList } = props;

  return (
    <_PlayerInfo>
      <_UserList>
        {playerList.map((player) => (
          <Profile key={player.user.id} name={player.user.name} icon={player.user.icon} />
        ))}
      </_UserList>
    </_PlayerInfo>
  );
});

const _PlayerInfo = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 200px;
  min-height: 300px;
  padding: 10px;
  border-radius: 6px;
  background: #fff8dccc;
  border: 1px solid #deb887;
`;

const _UserList = styled.div`
  .profile {
    &__img {
      width: 40px;
      height: 40px;
    }
    &__name {
      width: calc(100% - 50px);
      margin-right: 0;
      font-size: 14px;
      text-overflow: clip;
    }
  }
`;
