import { VFC, memo } from 'react';
import styled from 'styled-components';
import { cemeteryType } from '../../../../types/game/hanabi';
import { variable } from '../../../variable';

type props = {
  cemetery: cemeteryType[];
};

export const Cemetery: VFC<props> = memo((props) => {
  const { cemetery } = props;
  return (
    <_Container>
      {cemetery.map((v) => (
        <_List key={v.color} className={v.color}>
          {v.num.map((num, i) => (
            <_Num key={i}>{num}</_Num>
          ))}
        </_List>
      ))}
    </_Container>
  );
});

const _Container = styled.div`
  display: inline-block;
  min-width: 300px;
  margin-top: 30px;
  padding: 10px 24px;
  background: #202f55;
  border-radius: 8px;
`;

const _List = styled.div`
  display: flex;
  min-height: 30px;
  font-size: 20px;
  font-weight: bold;
  &.red {
    color: ${variable.red};
  }
  &.blue {
    color: ${variable.blue};
  }
  &.yellow {
    color: ${variable.yellow};
  }
  &.green {
    color: ${variable.green};
  }
  &.white {
    color: #fff;
  }
  &.purple {
    color: ${variable.purple};
  }
`;

const _Num = styled.div`
  display: inline-block;
  &:not(:first-child) {
    margin-left: 12px;
  }
`;
