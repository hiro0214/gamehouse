import { VFC, memo, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Canvas } from '../../components/game/fakeArtist/Canvas';
import { socket } from '../../socket';

const gameName = 'fakeArtist';

export const FakeArtist: VFC = memo(() => {
  const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null);
  const [context, setContext] = useState('');

  useEffect(() => {
    socket.on(`${gameName}:fuga`, (context: string) => {
      setContext(context);
    });
  }, []);

  const hoge = () => {
    const context = canvas?.toDataURL();
    socket.emit(`${gameName}:hoge`, context);
  };

  return (
    <_Container>
      <Canvas context={context} setCanvas={setCanvas} />
      <button onClick={hoge}>ボタン</button>
    </_Container>
  );
});

const _Container = styled.div`
  position: relative;
  display: flex;
  width: 1000px;
  min-height: 500px;
  margin-top: 100px;
  margin-bottom: 100px;
  background: #fff;
`;
