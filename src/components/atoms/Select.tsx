import { VFC, memo, ChangeEvent, ReactNode } from 'react';
import styled from 'styled-components';
import { variable } from '../../variable';

type props = {
  options: { key: number | string; value: string }[];
  value: number | string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  hdg?: string;
  children?: ReactNode;
  disabled?: boolean;
};

export const Select: VFC<props> = memo((props) => {
  const { children, options, value, onChange, disabled, hdg } = props;

  return (
    <_Container>
      <_Heading>{hdg}</_Heading>
      <_Select value={value} onChange={onChange} disabled={!disabled}>
        {children}
        {options.map((option) => (
          <option key={option.value} value={option.key}>
            {option.value}
          </option>
        ))}
      </_Select>
    </_Container>
  );
});

const _Container = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr;
  grid-gap: 10px;
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
`;

const _Heading = styled.div`
  font-size: 14px;
  font-weight: bold;
`;
