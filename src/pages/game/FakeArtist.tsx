import { VFC, memo, useState, useEffect } from 'react';
import styled from 'styled-components';
import { gameDataType, gameStatusType } from '../../../types/game/fakeArtist';
import { Button } from '../../components/atoms/Button';
import { Canvas } from '../../components/game/fakeArtist/Canvas';
import { Toast } from '../../components/molucules/Toast';
import { useToLobby } from '../../hooks/useToLobby';
import { useMyInfo } from '../../providers/UserInfoProvider';
import { socket } from '../../socket';
import { variable } from '../../variable';

const gameName = 'fakeArtist';

export const FakeArtist: VFC = memo(() => {
  const [gameData, setGameData] = useState<gameDataType>({} as gameDataType);
  const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null);
  const { myInfo } = useMyInfo();
  const [status, setStatus] = useState<gameStatusType>('');
  const [vote, setVote] = useState(false);
  const { toLobby } = useToLobby();

  useEffect(() => {
    socket.on(`${gameName}:getData`, (data: gameDataType) => setGameData(data));
    socket.on(`${gameName}:vote`, () => setStatus('vote'));
    socket.on(`${gameName}:voted`, () => setStatus('voted'));
    socket.on(`${gameName}:reversal`, (data: gameDataType) => {
      setGameData(data);
      setStatus('reversal');
    });
    socket.on(`${gameName}:answer`, (data: gameDataType) => {
      setGameData(data);
      setStatus('answer');
    });
    socket.on(`${gameName}:finish`, (data: gameDataType) => {
      setGameData(data);
      setStatus('finish');
    });

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

  const onclickVote = (index: number) => {
    setVote(true);
    socket.emit(`${gameName}:vote`, index);
  };

  const onclickAnswer = (index: number) => socket.emit(`${gameName}:answer`, index);

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
      {status === 'reversal' && <_Mission>エセ芸術家が回答を選択する</_Mission>}
      {status === 'finish' && (
        <_Winner>
          {gameData.answer ? (gameData.answer === gameData.theme ? 'エセ芸術家' : '芸術家') : 'エセ芸術家'}
          の勝利!!
        </_Winner>
      )}
      <_Wrapper>
        <Canvas
          gameData={gameData}
          setCanvas={setCanvas}
          color={gameData.colors[gameData.players.findIndex((v) => v.id === myInfo.id)]}
          disable={canvas || gameData.players[gameData.turn].id !== myInfo.id ? true : false}
          status={status}
          isFake={gameData.players[gameData.fakeMan].id === myInfo.id ? true : false}
          onclickAnswer={onclickAnswer}
        />
        <_Info>
          <_Card>
            <span>今回のテーマ</span>
            <_Name>{gameData.category}</_Name>
          </_Card>
          <_Card style={{ marginTop: '10px' }}>
            <span>今回のお題</span>
            <_Name>{gameData.players[gameData.fakeMan].id !== myInfo.id ? gameData.theme : '?'}</_Name>
          </_Card>
          <_UserList>
            {gameData.players.map((player, i) =>
              status === 'vote' ? (
                <_Profile key={player.id} style={{ borderColor: gameData.colors[i] }}>
                  {vote ? (
                    <_ProfileIcon>
                      <img src={`/assets/images/pokemon/${player.icon}.png`} />
                    </_ProfileIcon>
                  ) : (
                    <_ProfileVote onClick={() => onclickVote(i)}>投票</_ProfileVote>
                  )}
                  <_ProfileName>{player.name}</_ProfileName>
                </_Profile>
              ) : (
                <_Profile key={player.id} style={{ borderColor: gameData.colors[i] }}>
                  <_ProfileIcon>
                    <img src={`/assets/images/pokemon/${player.icon}.png`} />
                  </_ProfileIcon>
                  <_ProfileName>{player.name}</_ProfileName>
                </_Profile>
              )
            )}
          </_UserList>
        </_Info>
      </_Wrapper>
      {status === 'finish' && myInfo.isAdmin && (
        <div style={{ marginTop: '30px', textAlign: 'center' }}>
          <Button label={'ロビーに戻る'} onclick={toLobby} color={'teal'} />
        </div>
      )}
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

const _Winner = styled.p`
  position: absolute;
  left: 0;
  right: 0;
  top: -80px;
  width: 300px;
  margin: 0 auto;
  padding: 10px 0;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  background: ${variable.orange};
  border-radius: 34px;
  text-align: center;
  animation: loopScale 1.2s infinite;
  @keyframes loopScale {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
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
  border: 2px solid ${variable.yellow};
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
`;

const _Profile = styled.li`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  background: ${variable.gray[0]};
  border-width: 3px;
  border-style: solid;
  border-radius: 40px 6px 6px 40px;
  + li {
    margin-top: 10px;
  }
`;

const _ProfileIcon = styled.div`
  width: 40px;
  height: 40px;
  padding: 6px;
  background: #fff;
  border: 1px solid ${variable.border};
  border-radius: 50%;
  > img {
    width: 100%;
  }
`;

const _ProfileVote = styled.button`
  width: 40px;
  height: 40px;
  color: #000;
  background: yellow;
  font-size: 12px;
  font-weight: bold;
  border: 2px solid ${variable.cyan};
  border-radius: 50%;
`;

const _ProfileName = styled.div`
  width: calc(100% - 60px);
  margin-left: 10px;
  margin-right: 10px;
  font-size: 14px;
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
`;
