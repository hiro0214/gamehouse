import { VFC, memo, useState, useEffect } from 'react';
import styled from 'styled-components';
import { gameDataType, gameStatusType } from '../../../types/game/fakeArtist';
import { Canvas } from '../../components/game/fakeArtist/Canvas';
import { Profile } from '../../components/molucules/Profile';
import { Toast } from '../../components/molucules/Toast';
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
    // colors: [
    //   '#ff0f0f',
    //   '#0f0fff',
    //   '#0fff0f',
    //   '#ffff05',
    //   '#ff840a',
    //   '#ff0aff',
    //   '#0affff',
    //   '#840aff',
    //   '#bc611e',
    //   '#ff9498',
    //   '#00afcc',
    //   '#9cbb1c',
    //   '#003f8e',
    // ],
    // category: '海の生き物',
    // theme: 'イルカ',
    // context: '',
    // turn: 0,
  } as gameDataType);
  const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null);
  const { myInfo } = useMyInfo();
  const [status, setStatus] = useState<gameStatusType>('');

  useEffect(() => {
    socket.on(`${gameName}:getData`, (data: gameDataType) => setGameData(data));
    socket.on(`${gameName}:vote`, () => setStatus('vote'));

    socket.emit(`${gameName}:getData`);
    setTimeout(() => setStatus('theme'), 500);
    setTimeout(() => setStatus('title'), 10500);
    setTimeout(() => setStatus('game'), 16000);
  }, []);

  const onclickDraw = () => {
    const context = canvas?.toDataURL();
    socket.emit(`${gameName}:draw`, context);
    setCanvas(null);
  };

  const onclickReDraw = () => {
    const context = canvas?.getContext('2d') as CanvasRenderingContext2D;
    context.clearRect(0, 0, 750, 500);
    if (gameData.context.length) {
      const img = new Image();
      img.src = gameData.context;
      img.onload = () => context.drawImage(img, 0, 0);
    }

    setCanvas(null);
  };

  return Object.keys(gameData).length ? (
    <_Container>
      {status === 'game' && <Toast turn={gameData.players[gameData.turn].name} />}
      {status === 'game' &&
        (canvas ? (
          <_SubmitArea>
            <p>これでいい?</p>
            <button style={{ backgroundColor: variable.green[0] }} onClick={onclickDraw}>
              書いた！
            </button>
            <button style={{ backgroundColor: variable.gray[1] }} onClick={onclickReDraw}>
              書き直す！
            </button>
          </_SubmitArea>
        ) : gameData.players[gameData.fakeMan].id === myInfo.id ? (
          <_Mission>
            エセ芸術家だとバレてはいけない
            <br />
            バレても何を描いているか当てれば勝ち
          </_Mission>
        ) : (
          <_Mission>
            この中に一人お題を知らないエセ芸術家がいる
            <br />
            エセ芸術家にお題がバレてはいけない
          </_Mission>
        ))}
      {status === 'vote' && <_Mission>エセ芸術家は誰だ？</_Mission>}
      <_Wrapper>
        <Canvas
          context={gameData.context}
          setCanvas={setCanvas}
          color={gameData.colors[gameData.players.findIndex((v) => v.id === myInfo.id)]}
          disable={canvas || gameData.players[gameData.turn].id !== myInfo.id ? true : false}
          status={status}
          isFake={gameData.players[gameData.fakeMan].id === myInfo.id ? true : false}
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
            {gameData.players.map((player, i) => (
              <Profile
                key={player.id}
                name={player.name}
                icon={player.icon}
                color={gameData.colors[i]}
              />
            ))}
          </_UserList>
        </_Info>
      </_Wrapper>
    </_Container>
  ) : null;
});

const _Container = styled.div`
  position: relative;
  margin-top: 150px;
  margin-bottom: 150px;
`;

const _SubmitArea = styled.div`
  position: absolute;
  top: -100px;
  width: 100%;
  text-align: center;
  > p {
    margin-bottom: 15px;
    font-weight: bold;
  }
  > button {
    padding: 10px 40px;
    color: #fff;
    font-weight: bold;
    border-radius: 22px;
    + button {
      margin-left: 40px;
    }
  }
`;

const _Mission = styled.p`
  position: absolute;
  left: 0;
  right: 0;
  top: -100px;
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

const _Wrapper = styled.div`
  position: relative;
  display: flex;
  width: 1000px;
  height: 500px;
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
    border-width: 3px;
  }
  .profile__img {
    width: 40px;
    height: 40px;
  }
  .profile__name {
    font-size: 14px;
  }
`;
