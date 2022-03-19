import { VFC, memo } from 'react';
import styled from 'styled-components';
import { User } from '../../../../types/user';
import { Profile } from '../../molucules/Profile';

type props = {
  userList: User[];
};

export const PlayerInfo: VFC<props> = memo((props) => {
  const { userList } = props;

  return (
    <_PlayerInfo>
      <_UserList>
        {userList.map((user) => (
          <Profile key={user.id} name={user.name} icon={user.icon} />
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
