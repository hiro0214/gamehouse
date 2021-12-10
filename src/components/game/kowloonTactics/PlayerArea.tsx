import { VFC, memo } from 'react';
import styled from 'styled-components';
import { Profile } from '../../molucules/Profile';
import { variable } from '../../../variable';
import { User } from '../../../../types/user';

type props = {
  player: User;
  supporter: User[];
  area: 'red' | 'blue';
};

export const PlayerArea: VFC<props> = memo((props) => {
  const { player, supporter, area } = props;

  return (
    <_PlayerArea className={area}>
      <span>プレイヤー</span>
      {<Profile name={player.name} icon={player.icon} />}
      {supporter.length > 0 && <span style={{ marginTop: '15px' }}>サポーター</span>}
      <_SupporterList>
        {supporter.map((user) => (
          <Profile key={user.id} name={user.name} icon={user.icon} />
        ))}
      </_SupporterList>
    </_PlayerArea>
  );
});

const _PlayerArea = styled.div`
  position: absolute;
  top: 0;
  width: 200px;
  min-height: 300px;
  padding: 10px;
  border-radius: 6px;
  &.red {
    left: 0;
    background: #e53e3e66;
    border: 1px solid ${variable.red};
  }
  &.blue {
    right: 0;
    background: #3182ce66;
    border: 1px solid ${variable.blue};
  }
  > span {
    display: block;
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: bold;
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

const _SupporterList = styled.div``;
