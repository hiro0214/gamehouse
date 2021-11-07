import { VFC, memo, ChangeEvent } from 'react';
import styled from 'styled-components';
import { variable } from '../../variable';

type props = {
  value: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const TextInput: VFC<props> = memo((props) => {
  const { value, placeholder, onChange } = props;
  return (
    <_InputContainer className={'textContainer'}>
      <_TextInput value={value} placeholder={placeholder} onChange={onChange} />
      <_FocusLine />
    </_InputContainer>
  );
});

const _InputContainer = styled.div`
  position: relative;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
`;

const _TextInput = styled.input`
  width: 100%;
  padding: 12px 16px;
  border-bottom: 1px solid ${variable.gray[1]};
  outline: none;
  &:focus + div {
    transform: scale(1);
  }
`;

const _FocusLine = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  border-bottom: 2.5px solid #3e62ad;
  transform: scale(0);
  transform-origin: center;
  transition: transform 0.2s ease-out;
`;
