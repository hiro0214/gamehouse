import { VFC, memo } from 'react';
import { User } from '../../../types/user';
import styled from 'styled-components';
import { Heading } from '../atoms/Heading';
import { variable } from '../../variable';

type props = {
  userList: User[];
};

export const UserList: VFC<props> = memo((props) => {
  const { userList } = props;
  return (
    <_Container>
      <Heading text={'Player'} size={'2'} />
      <_List>
        {userList.map((user) => (
          <_User key={user.name}>
            <_Icon src={`/assets/images/pokemon/${user.icon}.png`} />
            <_Name>{user.name}</_Name>
          </_User>
        ))}
      </_List>
    </_Container>
  );
});

const _Container = styled.div`
  width: 35%;
  height: 500px;
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
    background: #60a8eb;
    border: 1px solid ${variable.blue};
    border-radius: 10px;
  }
`;

const _User = styled.li`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  background: ${variable.gray[0]};
  border: 2px solid ${variable.gray[1]};
  border-radius: 30px 6px 6px 30px;
  + li {
    margin-top: 10px;
  }
`;

const _Icon = styled.img`
  width: 50px;
  height: 50px;
  background: #fff;
  border-radius: 50%;
  border: 1px solid ${variable.border};
`;

const _Name = styled.div`
  width: calc(100% - 50px - 10px);
  margin-left: 10px;
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
`;
