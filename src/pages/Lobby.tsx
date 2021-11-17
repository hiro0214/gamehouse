import { memo, useEffect, useState } from 'react';
import styled from 'styled-components';
import { User } from '../../types/user';
import { UserList } from '../components/organisms/UserList';
import { CommonBackground } from '../components/style/CommonBackground';
import { useUserInfo } from '../hooks/useUserInfo';
import { socket } from '../socket';

export const Lobby = memo(() => {
  const [userList, setUserList] = useState([] as User[]);
  const { userInfo } = useUserInfo();

  useEffect(() => {
    socket.emit('common:getUser');
    console.log('global', userInfo);
  }, []);

  socket.on('common:getUser', (userList: User[]) => {
    setUserList(userList);
  });

  return (
    <CommonBackground>
      <_Container>
        <UserList userList={userList} />
        <_GameConfig>ゲーム設定</_GameConfig>
      </_Container>
    </CommonBackground>
  );
});

const _Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1000px;
  min-height: calc(100vh - 100px);
  margin-left: auto;
  margin-right: auto;
  padding: 40px;
  border: 1px solid #666666;
  border-radius: 10px;
  box-shadow: 0 0 2px 2px rgba(34, 34, 34, 0.3) inset;
`;

const _GameConfig = styled.div`
  width: 60%;
  height: 500px;
  background: rgba(20, 20, 20, 0.2);
  border-radius: 6px;
`;
