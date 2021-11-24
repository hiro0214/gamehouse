import { VFC, memo, ChangeEvent } from 'react';
import styled from 'styled-components';
import { variable } from '../../variable';

type props = {
  options: string[];
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  disabled?: boolean;
  hdg?: string;
  size?: 'half' | 'full';
};

export const Select: VFC<props> = memo((props) => {
  const { options, value, onChange, disabled, hdg, size } = props;
  return (
    <_Container>
      <_Heading>{hdg}</_Heading>
      <_Select className={size} value={value} onChange={onChange} disabled={!disabled}>
        <option>-- 選択してください --</option>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </_Select>
    </_Container>
  );
});

const _Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 30px;
  align-items: center;
`;

const _Select = styled.select`
  display: block;
  width: 300px;
  padding: 16px;
  font-size: 16px;
  background: #fff;
  border: 1px solid ${variable.gray[1]};
  border-radius: 4px;
  &.half {
    width: 50%;
  }
  &.full {
    width: 100%;
  }
`;

const _Heading = styled.div`
  font-size: 14px;
  font-weight: bold;
`;
