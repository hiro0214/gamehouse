import { VFC, memo } from 'react';
import styled from 'styled-components';
import { Field } from '../../components/game/theGame/Field';
import { InfoArea } from '../../components/game/theGame/InfoArea';
import { MyHand } from '../../components/game/theGame/MyHand';
import { PlayerInfo } from '../../components/game/theGame/PlayerInfo';
import { Toast } from '../../components/molucules/Toast';
import { useMyInfo } from '../../providers/UserInfoProvider';
import { socket } from '../../socket';

const gameName = 'theGame';

export const TheGame: VFC = memo(() => {
  return (
    <>
      <Toast turn={'たなか'} />
      <_Container>
        <Field />
        <div style={{ width: '450px' }}>
          <InfoArea />
          <MyHand />
        </div>
        <PlayerInfo />
      </_Container>
    </>
  );
});

const _Container = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 1100px;
  margin-top: 150px;
  margin-right: 200px;
  margin-bottom: 50px;
`;
