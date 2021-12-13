import { VFC, memo, useEffect, useState } from 'react';
import styled from 'styled-components';
import { kowloonTacticsConfig } from '../../../types/config';
import { kowloonTacticsData } from '../../../types/data';
import { CheckAnimate } from '../../components/game/kowloonTactics/CheckAnimate';
import { FieldHand } from '../../components/game/kowloonTactics/FieldHand';
import { GameResult } from '../../components/game/kowloonTactics/GameResult';
import { HandArea } from '../../components/game/kowloonTactics/HandArea';
import { JudgeArea } from '../../components/game/kowloonTactics/JudgeArea';
import { PlayerArea } from '../../components/game/kowloonTactics/PlayerArea';
import { Toast } from '../../components/molucules/Toast';
import { useMyInfo } from '../../providers/UserInfoProvider';
import { socket } from '../../socket';

type turn = 'red' | 'blue';
type judge = 'red' | 'blue' | 'draw';
type result = 'WIN' | 'LOSE' | 'DRAW';

export const KowloonTactics: VFC = memo(() => {
  const { myInfo } = useMyInfo();
  const [data, setData] = useState<kowloonTacticsData>({} as kowloonTacticsData);
  const [config, setConfig] = useState<kowloonTacticsConfig>({} as kowloonTacticsConfig);
  const [judgeArray, setJudgeArray] = useState<judge[]>([] as judge[]);
  const [turn, setTurn] = useState<turn>('' as turn);
  const [side, setSide] = useState<'red' | 'blue' | 'none'>('none');
  const [isFinish, setIsFinish] = useState(false);

  useEffect(() => {
    socket.on('common:getCurrentConfig', (gameConfig: kowloonTacticsConfig) => {
      setConfig(gameConfig);
      if (
        gameConfig.redPlayer.id === myInfo.id ||
        gameConfig.redSupporter.some((v) => v.id === myInfo.id)
      ) {
        setSide('red');
      } else if (
        gameConfig.bluePlayer.id === myInfo.id ||
        gameConfig.blueSupporter.some((v) => v.id === myInfo.id)
      ) {
        setSide('blue');
      }
    });
    socket.on('kowloonTactics:getData', (data: kowloonTacticsData) => setData(data));
    socket.on('kowloonTactics:getTurn', (turn: turn) => setTurn(turn));
    socket.on('kowloonTactics:getJudge', (data) => {
      const judges: judge[] = data[0];
      const isFinish: boolean = data[1];
      setJudgeArray(judges);
      if (isFinish) setIsFinish(true);
    });

    socket.emit('common:getCurrentConfig');
    socket.emit('kowloonTactics:getData');
    socket.emit('kowloonTactics:getTurn');
  }, []);

  const getResult = (): judge => {
    const redWin = judgeArray.filter((v) => v === 'red').length;
    const blueWin = judgeArray.filter((v) => v === 'blue').length;
    const result = redWin > blueWin ? 'red' : redWin < blueWin ? 'blue' : 'draw';
    return result;
  };

  const checkResult = (side: 'red' | 'blue'): result => {
    const result = getResult();
    return result === 'draw' ? 'DRAW' : result === side ? 'WIN' : 'LOSE';
  };

  return Object.keys(data).length && Object.keys(config).length ? (
    <>
      {judgeArray.length < 9 && (
        <Toast turn={turn === 'red' ? config.redPlayer.name : config.bluePlayer.name} />
      )}
      <_Container>
        <PlayerArea player={config.redPlayer} supporter={config.redSupporter} area={'red'} />
        <PlayerArea player={config.bluePlayer} supporter={config.blueSupporter} area={'blue'} />

        {judgeArray.length < 9 ? (
          <HandArea
            hands={data.redPlayer.hand}
            turn={turn === 'red' && true}
            isPlayer={config.redPlayer.id === myInfo.id && true}
            isHide={side !== 'red' && true}
          />
        ) : (
          <GameResult result={checkResult('red')} />
        )}
        <_Field>
          <FieldHand
            hands={data.redPlayer.field}
            isHide={side !== 'red' && true}
            isFinish={isFinish}
          />
          <JudgeArea judgeArray={judgeArray} />
          <FieldHand
            hands={data.bluePlayer.field}
            isHide={side !== 'blue' && true}
            isFinish={isFinish}
          />
        </_Field>
        {judgeArray.length < 9 ? (
          <HandArea
            hands={data.bluePlayer.hand}
            turn={turn === 'blue' && true}
            isPlayer={config.bluePlayer.id === myInfo.id && true}
            isHide={side !== 'blue' && true}
          />
        ) : (
          <GameResult result={checkResult('blue')} />
        )}
      </_Container>
      <CheckAnimate />
    </>
  ) : null;
});

const _Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 900px;
  height: 720px;
  margin-left: auto;
  margin-right: auto;
`;

const _Field = styled.div`
  display: flex;
  justify-content: space-between;
  width: 180px;
  margin: 0 28px;
  padding: 5px;
  background: #edf2f7;
  border: solid 1px #666;
  border-radius: 5px;
  box-shadow: 0 0 6px 4px #33333333;
`;
