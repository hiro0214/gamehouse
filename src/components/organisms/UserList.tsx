import { VFC, memo } from 'react';
import { User } from '../../../types/user';
import styled from 'styled-components';
import { Heading } from '../atoms/Heading';
import { variable } from '../../variable';
import { Profile } from '../molucules/Profile';
import { useMyInfo } from '../../providers/UserInfoProvider';

type props = {
  userList: User[];
};

export const UserList: VFC<props> = memo((props) => {
  const { userList } = props;
  const { myInfo } = useMyInfo();

  return (
    <_Container>
      <Heading text={'Player'} size={'2'} />
      <_List>
        {userList.map((user) => (
          <Profile
            key={user.id}
            name={user.name}
            icon={user.icon}
            editIcon={user.id === myInfo.id && true}
            editName={user.id === myInfo.id && true}
          />
        ))}
      </_List>
    </_Container>
  );
});

const _Container = styled.div`
  width: 35%;
  padding: 10px 10px 20px 20px;
  background: rgba(20, 20, 20, 0.2);
  border-radius: 6px;
`;

const _List = styled.ul`
  height: calc(100% - 71px);
  margin-right: -5px;
  padding-right: 5px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    background: inherit;
  }
  &::-webkit-scrollbar-thumb {
    background: ${variable.orange};
    border: 1px solid #d86405;
    border-radius: 10px;
  }
`;
