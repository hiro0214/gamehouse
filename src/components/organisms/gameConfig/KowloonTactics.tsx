import { VFC, memo, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useMyInfo } from '../../../providers/UserInfoProvider';
import { socket } from '../../../socket';
import { variable } from '../../../variable';
import { Button } from '../../atoms/Button';
import { kowloonTacticsConfig } from '../../../../types/config';
import { Profile } from '../../molucules/Profile';

const eventName = 'kowloonTactics';

export const KowloonTactics: VFC = memo(() => {
  const { myInfo } = useMyInfo();
  const [config, setConfig] = useState<kowloonTacticsConfig>({
    redPlayer: {
      id: '',
      name: '',
      icon: '',
      isAdmin: false,
    },
    bluePlayer: {
      id: '',
      name: '',
      icon: '',
      isAdmin: false,
    },
    redSupporter: [],
    blueSupporter: [],
  });

  useEffect(() => {
    socket.on(`${eventName}:updateConfig`, (gameConfig: kowloonTacticsConfig) => {
      setConfig(gameConfig);
    });

    socket.emit(`${eventName}:updateConfig`);
  }, []);

  const onclickJoinRedPlayer = () => socket.emit(`${eventName}:setRedPlayer`, myInfo);
  const onclickJoinBluePlayer = () => socket.emit(`${eventName}:setBluePlayer`, myInfo);
  const onclickJoinRedSupporter = () => socket.emit(`${eventName}:setRedSupporter`, myInfo);
  const onclickJoinBlueSupporter = () => socket.emit(`${eventName}:setBlueSupporter`, myInfo);

  return (
    <_Container>
      <_PlayerArea className={'red'}>
        <_Player>
          <span>プレイヤー</span>
          {config.redPlayer.id ? (
            <Profile name={config.redPlayer.name} icon={config.redPlayer.icon} />
          ) : (
            <Button
              label={'プレイヤーとして参加'}
              onclick={onclickJoinRedPlayer}
              color={'yellow'}
            />
          )}
        </_Player>
        <_Supporter>
          <span>サポーター</span>
          {!config.redSupporter.some((user) => user.id === myInfo.id) && (
            <Button
              label={'サポーターとして参加'}
              onclick={onclickJoinRedSupporter}
              color={'yellow'}
            />
          )}
          <_SupporterList>
            {config.redSupporter.map((user) => (
              <Profile key={user.id} name={user.name} icon={user.icon} />
            ))}
          </_SupporterList>
        </_Supporter>
      </_PlayerArea>

      <_PlayerArea className={'blue'}>
        <_Player>
          <span>プレイヤー</span>
          {config.bluePlayer.id ? (
            <Profile name={config.bluePlayer.name} icon={config.bluePlayer.icon} />
          ) : (
            <Button
              label={'プレイヤーとして参加'}
              onclick={onclickJoinBluePlayer}
              color={'yellow'}
            />
          )}
        </_Player>
        <_Supporter>
          <span>サポーター</span>
          {!config.blueSupporter.some((user) => user.id === myInfo.id) && (
            <Button
              label={'サポーターとして参加'}
              onclick={onclickJoinBlueSupporter}
              color={'yellow'}
            />
          )}
          <_SupporterList>
            {config.blueSupporter.map((user) => (
              <Profile key={user.id} name={user.name} icon={user.icon} />
            ))}
          </_SupporterList>
        </_Supporter>
      </_PlayerArea>
    </_Container>
  );
});

const _Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const _PlayerArea = styled.div`
  width: calc(100% / 2 - 10px);
  min-height: 350px;
  padding: 10px;
  border: 1px solid ${variable.border};
  border-radius: 6px;
  &.red {
    background: #e53e3e66;
  }
  &.blue {
    background: #3182ce66;
  }
  .profile {
    &__img {
      width: 40px;
      height: 40px;
    }
    &__name {
      width: calc(100% - 50px);
      margin-right: 0;
      font-size: 14px;
      text-overflow: clip;
    }
  }
`;

const _Player = styled.div`
  padding-bottom: 20px;
  border-bottom: 1px solid #666;
  > .btn {
    width: 100%;
    font-size: 14px;
    color: ${variable.black};
  }
  > span {
    display: block;
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: bold;
  }
`;

const _Supporter = styled.div`
  padding-top: 10px;
  > .btn {
    width: 100%;
    margin-bottom: 10px;
    font-size: 14px;
    color: ${variable.black};
  }
  > span {
    display: block;
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: bold;
  }
`;

const _SupporterList = styled.div``;
