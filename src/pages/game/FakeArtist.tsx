import { VFC, memo, useState, useEffect } from 'react';
import styled from 'styled-components';
import { colors, gameDataType } from '../../../types/game/fakeArtist';
import { Canvas } from '../../components/game/fakeArtist/Canvas';
import { Profile } from '../../components/molucules/Profile';
import { useMyInfo } from '../../providers/UserInfoProvider';
import { socket } from '../../socket';
import { variable } from '../../variable';

const gameName = 'fakeArtist';

export const FakeArtist: VFC = memo(() => {
  const [gameData, setGameData] = useState<gameDataType>({
    // players: [
    //   { id: 'b4k60miq', name: 'いわもと', icon: '049', isAdmin: true },
    //   { id: 'zaqu57qt', name: 'たなか', icon: '134', isAdmin: false },
    // ],
    // fakeMan: 1,
    // category: '海の生き物',
    // theme: 'イルカ',
    // context: '',
    // turn: 0,
  } as gameDataType);
  const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null);
  const { myInfo } = useMyInfo();

  useEffect(() => {
    socket.on(`${gameName}:getData`, (data: gameDataType) => setGameData(data));

    socket.emit(`${gameName}:getData`);
  }, []);

  // const hoge = () => {
  //   const context = canvas?.toDataURL();
  //   socket.emit(`${gameName}:hoge`, context);
  // };

  return Object.keys(gameData).length ? (
    <_Container>
      <Canvas
        context={gameData.context}
        setCanvas={setCanvas}
        playerIndex={gameData.players.findIndex((v) => v.id === myInfo.id)}
      />
      <_Info>
        <_Card>
          <span>今回のテーマ</span>
          <_Name>{gameData.category}</_Name>
        </_Card>
        <_Card style={{ marginTop: '10px' }}>
          <span>今回のお題</span>
          <_Name>
            {gameData.players[gameData.fakeMan].id !== myInfo.id ? gameData.theme : '?'}
          </_Name>
        </_Card>
        <_UserList>
          {gameData.players.map((player) => (
            <Profile key={player.id} name={player.name} icon={player.icon} />
          ))}
        </_UserList>
      </_Info>
    </_Container>
  ) : null;
});

const _Container = styled.div`
  position: relative;
  display: flex;
  width: 1000px;
  height: 500px;
  margin-top: 100px;
  margin-bottom: 100px;
`;

const _Info = styled.div`
  width: calc(100% - 756px);
  padding-left: 20px;
  padding-right: 20px;
`;

const _Card = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  background: #ffedab;
  border: 2px solid ${variable.border};
  border-radius: 4px;
  text-align: center;
  > span {
    display: block;
    padding-top: 5px;
    padding-bottom: 5px;
    font-size: 12px;
    border-bottom: 1px solid ${variable.gray[1]};
  }
`;

const _Name = styled.p`
  padding-top: 15px;
  padding-bottom: 15px;
  font-size: 14px;
  font-weight: bold;
`;

const _UserList = styled.ul`
  height: calc(100% - 188px);
  margin-top: 10px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  .profile {
    &:nth-of-type(1) {
      border-color: ${colors[0]};
    }
    &:nth-of-type(2) {
      border-color: ${colors[1]};
    }
    &:nth-of-type(3) {
      border-color: ${colors[2]};
    }
    &:nth-of-type(4) {
      border-color: ${colors[3]};
    }
    &:nth-of-type(5) {
      border-color: ${colors[4]};
    }
    &:nth-of-type(6) {
      border-color: ${colors[5]};
    }
    &:nth-of-type(7) {
      border-color: ${colors[6]};
    }
    &:nth-of-type(8) {
      border-color: ${colors[7]};
    }
    &:nth-of-type(9) {
      border-color: ${colors[8]};
    }
    &:nth-of-type(10) {
      border-color: ${colors[9]};
    }
  }
  .profile__img {
    width: 40px;
    height: 40px;
  }
  .profile__name {
    font-size: 14px;
  }
`;
