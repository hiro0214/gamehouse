import { VFC, memo, useState, ChangeEvent, useEffect } from 'react';
import styled from 'styled-components';
import { useMyInfo } from '../../../providers/UserInfoProvider';
import { socket } from '../../../socket';
import { hanabiConfig } from '../../../../types/config';
import { Select } from '../../atoms/Select';

const colorOptions = [
  {
    key: 4,
    value: '4色',
  },
  {
    key: 5,
    value: '5色',
  },
  {
    key: 6,
    value: '6色',
  },
];
const handOptions = [
  {
    key: 3,
    value: '3枚',
  },
  {
    key: 4,
    value: '4枚',
  },
  {
    key: 5,
    value: '5枚',
  },
];

export const Hanabi: VFC = memo(() => {
  const { myInfo } = useMyInfo();
  const [colorNum, setColorNum] = useState<number | null>(null);
  const [handNum, setHandNum] = useState<number | null>(null);

  useEffect(() => {
    socket.on('hanabi:updateConfig', (config: hanabiConfig) => {
      setColorNum(config.colorNum);
      setHandNum(config.handNum);
    });

    socket.emit('hanabi:getConfig');
  }, []);

  const onchangeColorNum = (e: ChangeEvent<HTMLSelectElement>) => {
    socket.emit('hanabi:setColorNum', e.target.options[e.target.selectedIndex].value);
  };

  const onchangeHandNum = (e: ChangeEvent<HTMLSelectElement>) => {
    socket.emit('hanabi:setHandNum', e.target.options[e.target.selectedIndex].value);
  };

  return (
    <_Container>
      <_Center>
        <Select
          options={colorOptions}
          hdg={'色の数'}
          value={colorNum ? colorNum : ''}
          onChange={onchangeColorNum}
          disabled={myInfo.isAdmin}
        />
      </_Center>
      <_Center style={{ marginTop: '10px' }}>
        <Select
          options={handOptions}
          hdg={'手札の枚数'}
          value={handNum ? handNum : ''}
          onChange={onchangeHandNum}
          disabled={myInfo.isAdmin}
        />
      </_Center>
    </_Container>
  );
});

const _Container = styled.div``;

const _Center = styled.div`
  display: flex;
  justify-content: center;
  select {
    width: 150px;
  }
`;
