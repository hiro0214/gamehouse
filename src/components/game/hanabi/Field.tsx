import { VFC, memo } from 'react';
import styled from 'styled-components';
import { hand } from '../../../../types/game/hanabi';
import { variable } from '../../../variable';
import { Hand } from './Hand';

type props = {
  deck: number;
  fields: hand[];
};

export const Field: VFC<props> = memo((props) => {
  const { deck, fields } = props;
  return (
    <_Container>
      <_Deck>{deck}</_Deck>
      <_Field>
        {fields.map((hand, i) => (
          <Hand key={i} color={hand.color} num={hand.num} />
        ))}
      </_Field>
    </_Container>
  );
});

const _Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  padding: 20px;
  background: #202f55;
  border-radius: 8px;
  pointer-events: none;
`;

const _Deck = styled.div`
  width: 60px;
  height: 120px;
  margin-right: 30px;
  padding-top: 5px;
  font-size: 30px;
  font-weight: bold;
  background: #becef1;
  border: 3px solid ${variable.gray[1]};
  border-radius: 8px;
  text-align: center;
`;

const _Field = styled.div`
  display: flex;
  .hand {
    &:not(:first-child) {
      margin-left: 10px;
    }
    &.red {
      border: 3px solid ${variable.red};
    }
    &.blue {
      border: 3px solid ${variable.blue};
    }
    &.yellow {
      border: 3px solid ${variable.yellow};
    }
    &.green {
      border: 3px solid ${variable.green};
    }
    &.white {
      border: 3px solid #fff;
    }
    &.purple {
      border: 3px solid ${variable.purple};
    }
  }
`;
