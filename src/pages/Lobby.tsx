import { memo, useEffect, useState } from 'react';
import styled from 'styled-components';
import { User } from '../../types/user';
import { GameConfig } from '../components/organisms/GameConfig';
import { UserList } from '../components/organisms/UserList';
import { socket } from '../socket';

export const Lobby = memo(() => {
  const [userList, setUserList] = useState([] as User[]);

  useEffect(() => {
    socket.emit('common:getUser');
    socket.on('common:getUser', (userList: User[]) => setUserList(userList));
  }, []);

  return (
    <_Container>
      <UserList userList={userList} />
      <GameConfig />
    </_Container>
  );
});

const _Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1000px;
  height: 720px;
  margin-left: auto;
  margin-right: auto;
  padding: 40px;
  border: 1px solid #666666;
  border-radius: 10px;
  box-shadow: 0 0 2px 2px rgba(34, 34, 34, 0.3) inset;
`;
